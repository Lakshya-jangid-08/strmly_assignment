const express = require('express');
const Router = express.Router();
const {loginController, signupController, getUserController} = require('../Controller/user.Controller');
const { authMiddleware } = require('../middleware/authMiddleware');

Router.get('/profile', authMiddleware,getUserController);
Router.post('/login', loginController);
Router.post('/signup', signupController);

module.exports = Router;