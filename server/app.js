const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const movieRoute = require('./Routes/movieRoute');
const cors = require('cors');

dotenv.config({ path: path.resolve(__dirname, 'config.env') });

const app = express();

app.use(express.json());
app.use(cors());

app.use('/movies', movieRoute);

module.exports = app;
