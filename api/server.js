const express = require('express');


const { logger } = require('./middleware/middleware') //WHY DID GABE PUT THIS HERE?


const usersRouter = require('./users/users-router');

const server = express();


server.use(express.json()) // remember express by default cannot parse JSON in request bodies


server.use(logger) //AND WHY DID HE PUT THIS HERE

// global middlewares and the user's router need to be connected here
server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;