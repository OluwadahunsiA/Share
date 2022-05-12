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

exports.getOneMovie = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Model.findById({ _id: id });

    res.status(200).json({
      status: 'success',
      data,
    });
  } catch (err) {
    res.json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.patchOneMovie = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  try {
    const data = await Model.findByIdAndUpdate(id, body, { new: true });
    res.status(200).json({ status: 'success', data });
  } catch (err) {
    res.json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.likeOneMovie = async (req, res) => {
  const { id } = req.params;
  const user = req.body.id;
  try {
    const data = await Model.findById({ _id: id });

    data.likes.push(user);

    const updatedLikes = await Model.findByIdAndUpdate(id, data, { new: true });

    res.status(200).json({
      status: 'success',
      data: updatedLikes,
    });
  } catch (err) {
    res.json({
      status: 'fail',
      err: err.message,
    });
  }
};
