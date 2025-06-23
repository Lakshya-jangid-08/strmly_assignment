const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./Routes/auth.route.js');
const postRoutes = require('./Routes/post.route.js');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/auth',authRoutes);
app.use('/post',postRoutes);

module.exports = app;