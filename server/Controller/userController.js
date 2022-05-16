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
        token: token,
        user: newUser,
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

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // check to see if user exists

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        status: 'fail',
        message: 'This user does not exist',
      });
    }

    // if user exists, verify password.
    const verifyPassword = await bcrypt.compare(password, user.password);

    // generate token if the password is correct

    if (verifyPassword) {
      const token = jwt.sign(
        { email: user.email, id: user._id },
        process.env.SECRET,
        { expiresIn: '1h' }
      );

      res.status(200).json({
        status: 'success',
        token,
      });
    } else {
      return res.json({
        status: 'fail',
        message: 'Incorrect login details',
      });
    }
  } catch (err) {
    res.json({
      status: 'fail',
      message: err.message,
    });
  }
};
