const express = require('express');
const { loginUser, signUpUser } = require('../Controller/userController');

const router = express.Router();

router.route('/signup').post(signUpUser);
router.route('/login').post(loginUser);
// router.route('/logout').post(logoutUser);

module.exports = router;
