const express = require('express');
const {
  getAllMovies,
  createMovie,
  getOneMovie,
  patchOneMovie,
} = require('../Controller/movieController');

const router = express.Router();

router.route('/').get(getAllMovies).post(createMovie);
router.route('/:id').get(getOneMovie).patch(patchOneMovie);

module.exports = router;
