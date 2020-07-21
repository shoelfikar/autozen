const express = require('express');
const Router = express.Router();
const inspectorControl = require('../controllers/inspectors');


Router
  .post('/register', inspectorControl.inspectorRegister)



module.exports = Router;