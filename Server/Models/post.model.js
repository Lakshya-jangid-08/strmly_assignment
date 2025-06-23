const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');

const PostSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    videoUrl: {
        type: String,
        required: true
    },
    creator : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    uploadDate: {
        type: Date,
        default: Date.now
    }
})


const Post = mongoose.model('Post', PostSchema);
module.exports = Post;