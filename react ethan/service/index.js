const express = require('express');
const cookieParser = require('cookie-parser');
const uuid = require('uuid');
const app = express();
const db = require('./database.js')
const bcrypt = require('bcrypt');
const { peerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

// The scores and users are saved in memory and disappear whenever the service is restarted.
let users = {};
let scores = [];
let bestTime = 0
let preferred_times = []
let filters = []
// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the applications static content
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await db.getUser(req.body.email)) {
    res.status(409).send({ msg: 'This user already exists' });
  } else {
    const user = await db.createUser(req.body.email, req.body.password);

    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
  console.log(req.body.email + "<--- This is the created email")
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await db.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });

  console.log(req.body.email + "<--- This is the login email")
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();

  console.log(authCookieName + "<---- This is being deleted")
});

const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await db.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

apiRouter.post('/filters', (req, res) => {

  console.log('Received filter:', req.body);

  const { hours, people, timeOfDay } = req.body;

  // Validate input
  if (!hours || !people || !timeOfDay) {
      res.status(400).send({ msg: 'Missing filter parameters' });
      return;
  }

  // Save the filter to the in-memory list
  const newFilter = { hours, people, timeOfDay };
  filters.push(newFilter);

  console.log("filters right now is ", filters, "the new filter being added is", newFilter)

  res.status(201).send({ msg: 'Filter saved successfully', filter: newFilter });
});

// GetTimes
apiRouter.get('/paint', (_req, res) => {
  res.send(preferred_times);
});

// GetBestTime
apiRouter.get('/paint', (_req, res) => {
  preferred_times = updatePrefTime(req.body)
  res.send(bestTime);
})

// Submit
apiRouter.post('/paint', (req, res) => {
  preferred_times = updatePrefTime(req.body, bestTime);
  res.send(scores);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

apiRouter.get('/filters', (_req, res) => {
  res.send(filters);
});

apiRouter.post('/paint', (req, res) => {
  const { newTime } = req.body;
  if (!newTime) {
    res.status(400).send({ msg: 'Missing new time' });
    return;
  }
  preferred_times.push(newTime);
  bestTime = calculateBestTime(preferred_times);
  res.send({ preferred_times, bestTime });
});

function selectBestTime(filters, selectedTimes) {
  console.log(filters)
  const timeSlots = {
    morning: ['7-8', '8-9', '9-10', '10-11', '11-12'],
    afternoon: ['12-1', '1-2', '2-3', '3-4', '4-5'],
    evening: ['6-7', '7-8', '8-9', '9-10', '10-11'],
  };

  let bestTime = '';
  filters.forEach(filter => {
    const { hours, people, timeOfDay } = filter;
    console.log(timeOfDay)
    const timeSlotList = timeSlots[timeOfDay] || [];

    console.log("Current time slot list", timeSlotList)
    console.log("Currently selected times", selectedTimes)
    i = hours

    if (timeOfDay === 'morning') {
      const matches = timeSlotList.filter((time) => selectedTimes.includes(time));
      if (matches.length > 0) {
        console.log('Matching times:', matches);
        bestTime = matches[0]
      } else {
        console.log('No matches found.');
      }
    }
    if (timeOfDay === 'afternoon'){
      const matches = timeSlotList.filter((time) => selectedTimes.includes(time));
      if (matches.length > 0) {
        console.log('Matching times:', matches);
          console.log(Math.floor(13/2))
          bestTime = matches[Math.floor(matches.length / 2)];
      } else {
        console.log('No matches found.');
      }
    }
    if (timeOfDay == "evening"){
      const matches = timeSlotList.filter((time) => selectedTimes.includes(time));
      if (matches.length > 0) {
        console.log('Matching times:', matches);
          bestTime = matches[matches.length - 1];
      } else {
        console.log('No matches found.');
      }
    }

  });

  return bestTime;
}

// Endpoint to get the best time based on filters
apiRouter.post('/best-time', (req, res) => {
  const selectedTimes = req.body.selectedTimes; // Get selected times from the request body
  if (!selectedTimes || selectedTimes.length === 0) {
    return res.status(400).send({ msg: 'No times selected' });
  }

  // Calculate the best time based on the selected times
  console.log("filters before selectBestTime", filters)
  const bestTime = selectBestTime(filters, selectedTimes);
  console.log("Best time calculated:", bestTime);

  res.send({ bestTime }); // Send the best time back to the frontend
});

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

console.log("The port right now is...")

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);

