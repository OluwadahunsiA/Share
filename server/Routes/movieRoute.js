const express = require('express');
const { getAllMovies } = require('../Controller/movieController');

const router = express.Router();

router.route('/').get(getAllMovies);

module.exports = router;
