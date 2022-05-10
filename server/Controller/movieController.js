const Model = require('../Model/movieModel');

exports.getAllMovies = async (req, res) => {
  try {
    const data = await Model.find();

    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
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
