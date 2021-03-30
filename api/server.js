const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
// const swaggerJsDoc = require('swagger-jsdoc')
// const swaggerUI = require('swagger-ui-express')

const authRouter = require('./auth/auth-router.js');
const usersRouter = require('./users/users-router.js');
const recipesRouter = require('./recipes/recipes-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/recipes', recipesRouter);

server.get('/', (req, res) => {
  res.json({ api: 'up', environment: process.env.NODE_ENV });
});

module.exports = server;
