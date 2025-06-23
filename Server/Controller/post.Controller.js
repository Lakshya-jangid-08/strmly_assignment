const Post = require('../Models/post.model');
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

const getPostsController = async (req, res) => {
    try {
        const posts = await Post.find().populate('creator', 'name email');
        
        return res.status(200).json(posts);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

const createPostController = async (req, res) => {
    try {
        console.log("Creating post with data:", req.body);
        
        const { title, description } = req.body;
        if (!title || !description || !req.file) {
            return res.status(400).json({ message: 'Title, description, and video file are required' });
        }

        // Upload video from memory buffer to Cloudinary
        const uploadStream = () =>
            new Promise((resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    {
                        resource_type: "video",
                        folder: "videos"
                    },
                    (error, result) => {
                        if (result) {
                            resolve(result);
                        } else {
                            reject(error);
                        }
                    }
                );
                streamifier.createReadStream(req.file.buffer).pipe(stream);
            });

        const uploadResult = await uploadStream();
        const videoUrl = uploadResult.secure_url;
        console.log("Video uploaded to Cloudinary:", videoUrl);
        
        const post = new Post({
            title,
            description,
            videoUrl,
            creator: req.user._id
        });
        
        await post.save();
        return res.status(201).json({ message: 'Post created successfully', post });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    createPostController, getPostsController
}