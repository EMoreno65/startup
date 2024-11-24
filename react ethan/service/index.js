const express = require('express');
const uuid = require('uuid');
const app = express();

// The scores and users are saved in memory and disappear whenever the service is restarted.
let users = {};
let preferred_times = [];

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Create a User
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

// Login a User
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

// Logout a User
apiRouter.delete('/auth/logout', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);
    if (user) {
      delete user.token;
    }
    res.status(204).end();
  });

// Get Selected Times
apiRouter.get('/paint', (_req, res) => {
    res.send(preferred_times);
  });


// Submit Time Selection
apiRouter.post('/paint', (req, res) => {
    scores = updateScores(req.body, scores);
    res.send(scores);
  });

// updateScores considers a new score for inclusion in the high scores.
function updatePrefTime(newTime) {
    preferred_times.add(newTime)
    return preferred_times;
  }