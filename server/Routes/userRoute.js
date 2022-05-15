const express = require('express');
const { loginUser } = require('../Controller/userController');

const router = express.Router();

router.route('/login').post(loginUser);
// router.route('/logout').post(logoutUser);
