const express = require('express');
const {
  getAllMovies,
  createMovie,
  getOneMovie,
  patchOneMovie,
  likeOneMovie
} = require('../Controller/movieController');

const router = express.Router();

router.route('/').get(getAllMovies).post(createMovie)
router.route('/:id').get(getOneMovie).patch(patchOneMovie);
router.route('/like/:id').patch(likeOneMovie);

module.exports = router;
