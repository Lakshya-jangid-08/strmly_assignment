const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL); // Use DB_URL as-is
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
}

module.exports = connectDB;