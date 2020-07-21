const express = require('express');
const Router = express.Router();
const users = require('./users');
const inspectors = require('./inspectors');
const messages = require('./messages');


Router
  .use('/users', users)
  .use('/inspector', inspectors)
  .use('/message', messages)
  .get('/', (req, res)=> {
    res.json({
      message: 'Welcome to autozen API',
      author: 'sulfikardi',
    })
  })



module.exports = Router;