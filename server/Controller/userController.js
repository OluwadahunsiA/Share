const User = require('../Model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signUpUser = async (req, res) => {
  const { email, password, username, confirmPassword } = req.body;
  try {
    // check if the user does not already exist in the dB.

    const user = await User.findOne({ email });

    if (!(password === confirmPassword)) {
      res.json({
        status: 'fail',
        message: 'passwords do not match',
      });
    }

    if (!user) {
      // hash the password of the user and prepare for storing in DB.

      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = await User.create({
        email,
        username,
        password: hashedPassword,
        confirmPassword: hashedPassword,
      });

      // sign a token and send it to the new user

      const token = jwt.sign(
        { email: newUser.email, id: newUser._id },
        process.env.SECRET,
        { expiresIn: '1h' }
      );

      res.status(200).json({
        status: 'success',
        data: token,
      });
    } else {
      return res.json({
        status: 'fail',
        message: 'This user already exists  ',
      });
    }
  } catch (err) {
    console.log(err.message);
    res.json({
      status: 'fail',
      message: err.message,
    });
  }
};

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
