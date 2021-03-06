const express = require('express');
const Router = express.Router();
const messageControl = require('../controllers/messages');


Router
  .post('/send/:userId', messageControl.sendMessage)
  .get('/confirm/:inspectorId/:messageId', messageControl.inspectorConfirm)




module.exports = Router;