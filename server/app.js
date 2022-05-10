const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const movieRoute = require('./Routes/movieRoute');

dotenv.config({ path: path.resolve(__dirname, 'config.env') });

const app = express();

app.use(express.json());

app.use('/movies', movieRoute);

module.exports = app;
