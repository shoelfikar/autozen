require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const Router = require('./routes/index');
const messages = require('./controllers/messages');


app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/v1/autozen', Router);

app.listen(port, ()=> {
  messages.getMessage();
  console.log(`App is running in port ${port}`)
})