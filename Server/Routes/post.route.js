const express = require('express');
const Router = express.Router();
const { authMiddleware } = require('../middleware/authMiddleware');
const { createPostController, getPostsController } = require('../Controller/post.Controller');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

Router.get('/get-posts', getPostsController);
Router.post('/upload', authMiddleware, upload.single('video'), createPostController);

module.exports = Router;