const app = require('./app');
const Http = require('http');
const connectDB = require('./Config/db');
connectDB();
const connectCloudinary = require('./Config/cloudinary');
connectCloudinary();
const dotenv = require('dotenv');
dotenv.config();

const Server = Http.createServer(app);

Server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});