require('dotenv').config();
const express = require('express');

const cors = require('cors')

const apiV1 = require('./app/api/v1');

const app = express();

app.set('port', process.env.PORT || 3001);

app.use(cors());

app.use(express.json())

app.use('/api/v1', apiV1);

app.use((err, req, res, next) => {
  if (err) {
    res.sendStatus(err.status || 500);
  } else {
    res.sendStatus(404);
  }
});

module.exports = app;