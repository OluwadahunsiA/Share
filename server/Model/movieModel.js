const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A movie must have a title'],
  },
  description: {
    type: String,
    required: [true, 'A description must be provided'],
  },
  tags: {
    type: [String],
  },
  cratedAt: {
    type: Date,
    default: Date.now(),
  },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
