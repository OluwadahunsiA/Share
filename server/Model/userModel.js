const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username'],
  },
  email: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please provide a password'],
    validate: {
      validator: function (val) {
        return val === this.password;
      },
      message: 'Passwords do not match',
    },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
