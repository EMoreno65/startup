const express = require('express');
const uuid = require('uuid');
const app = express();

// The scores and users are saved in memory and disappear whenever the service is restarted.
let users = {};
let scores = [];
let bestTime = prefTime
let preferred_times = []
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

function calculateBestTime(preferred_times) {
  // Define time ranges for each time of day
  const timeRanges = {
      morning: { start: 7, end: 12 },
      afternoon: { start: 12, end: 18 },
      evening: { start: 18, end: 23 },
  };

  // Default to "no preferred time" if the list is empty
  if (preferred_times.length === 0) {
      return null;
  }

  // Get the last submitted filter's time of day
  const lastFilter = preferred_times[preferred_times.length - 1];

  if (!lastFilter || !timeRanges[lastFilter]) {
      return null;
  }

  const range = timeRanges[lastFilter];

  // Logic to choose the best time within the given range
  if (lastFilter === 'morning') {
      return range.start; // Earliest time
  } else if (lastFilter === 'afternoon') {
      return Math.floor((range.start + range.end) / 2); // Median time
  } else if (lastFilter === 'evening') {
      return range.end - 1; // Latest time
  }

  return null; // Fallback if no valid match is found
}