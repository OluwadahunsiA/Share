const User = require('../Model/userModel');

exports.loginUser = (req, res) => {
  console.log(req.body);
  try {
    res.status(200).json({
      status: 'success',
      message: 'success',
    });
  } catch (err) {
    res.json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.signUpUser = (req, res) => {
  console.log(req.body);
  try {
    res.status(200).json({
      status: 'success',
      message: 'success',
    });
  } catch (err) {
    res.json({
      status: 'fail',
      message: err.message,
    });
  }
};
