const express = require('express');
const uuid = require('uuid');
const app = express();

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

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
    users[user.email] = user;

    res.send({ token: user.token });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    if (req.body.password === user.password) {
      user.token = uuid.v4();
      res.send({ token: user.token });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
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

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// updateScores considers a new score for inclusion in the high scores.
// function updateScores(newScore, scores) {
//   let found = false;
//   for (const [i, prevScore] of scores.entries()) {
//     if (newScore.score > prevScore.score) {
//       scores.splice(i, 0, newScore);
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//     scores.push(newScore);
//   }

//   if (scores.length > 10) {
//     scores.length = 10;
//   }

//   return scores;
// }

// Get All Filters
apiRouter.get('/filters', (_req, res) => {
  res.send(filters);
});

// Update Preferred Times
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

// Helper function to calculate best time based on filters
function selectBestTime(filters, selectedTimes) {
  console.log(filters)
  // Define possible time slots
  const timeSlots = {
    morning: ['7-8', '8-9', '9-10', '10-11', '11-12'],
    afternoon: ['12-1', '1-2', '2-3', '3-4', '4-5'],
    evening: ['6-7', '7-8', '8-9', '9-10', '10-11'],
  };

  // Aggregate the filters to make a decision
  let bestTime = '';
  filters.forEach(filter => {
    const { hours, people, timeOfDay } = filter;
    console.log(timeOfDay)
    const timeSlotList = timeSlots[timeOfDay] || [];

    console.log("Current time slot list", timeSlotList)
    console.log("Currently selected times", selectedTimes)

    if (timeOfDay === 'morning') {
      const matches = timeSlotList.filter((time) => selectedTimes.includes(time));
      if (matches.length > 0) {
        console.log('Matching times:', matches);
        bestTime = matches[0]
      } else {
        console.log('No matches found.');
      }
      console.log(bestTime)
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
