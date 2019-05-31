const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const actionRouter = require('./routes/actionRouter.js');
const projectRouter = require('./routes/projectRouter.js');

const server = express();

// middleware
server.use(express.json());
server.use(helmet());
server.use(cors({ origin: 'http://localhost:3000' }));

server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's do this ish!</h2>`);
});

module.exports = server;
