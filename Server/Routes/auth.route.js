const express = require('express');
const Router = express.Router();
const {loginController, signupController, getUserController} = require('../Controller/user.Controller');

Router.get('/profile', getUserController);
Router.post('/login', loginController);
Router.post('/signup', signupController);

module.exports = Router;