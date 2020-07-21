const express = require('express');
const Router = express.Router();
const userController = require('../controllers/users');


Router
  .post('/register', userController.register)
  .post('/login', userController.loginUser)





module.exports = Router;