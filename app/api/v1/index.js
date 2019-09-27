const express = require('express');

const { login, encoder } = require('./routes');

const authMiddleware = require('./middleware/authorization');

const app = express();

app.use('/login', login);
app.use('/encoder', authMiddleware, encoder)

module.exports = app;