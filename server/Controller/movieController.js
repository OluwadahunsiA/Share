const Model = require('../Model/movieModel');

exports.getAllMovies = (req, res) => {
  res.status(200).json({
    message: 'A request was made to this route',
  });
};

exports.createMovie = async (req, res) => {
  const body = req.body;

  try {
    const data = await Model.create(body);

    res.status(200).json({ status: 'success', data });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};
