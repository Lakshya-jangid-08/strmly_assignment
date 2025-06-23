const jsonwebtoken = require('jsonwebtoken');
const User = require('../Models/user.model');

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ messgae: "access denied" });
    }
    try {
        const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
        
        const user = await User.findById(decoded._id);
        if (user) {
            req.user = user;
            return next();
        }
        return res.status(404).json({ message: "User not found" });
    } catch (err) {
        console.error(err);
        return res.status(404).json({ message: "token invalid" });
    }
}

module.exports = {
    authMiddleware
}