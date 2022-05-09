const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, 'config.env') });

const app = express();

app.use(express.json());

module.exports = app;
