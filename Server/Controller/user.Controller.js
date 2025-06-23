const { log } = require('console');
const User = require('../Models/user.model');

const loginController = async (req, res)=>{
    const {email, password} = req.body;
    try {
        if(!email || !password) {
            return res.status(400).json({message:'Email and password are required'});
        }

        const user = await User.findOne({ email: email });
        if(!user) {
            return res.status(404).json({message:'User not found'});
        }

        const isMatch = await user.comparePassword(password);
        if(!isMatch) {
            return res.status(401).json({message:'Invalid credentials'});
        }

        const token = user.generateToken();
    
        return res.status(200).json({message:'Login successful', token: token});

    } catch (err) {
        console.error(err);
        return res.status(500).json({message:'Internal Server Error'});
    }
}

const signupController = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(400).json({message:'Name, email, and password are required'});
        }
        
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(409).json({message:'User already exists'});
        }
        
        const hashedPassword = await User.hashPassword(password);
        
        const user = await User.create({
            name: name,
            email: email,
            password: hashedPassword
        });

        const token = user.generateToken();
        return res.status(201).json({message:'User created successfully', token: token });

    } catch (err) {
        console.error(err);
        return res.status(500).json({message:'Internal Server Error'});
    }
}

const getUserController = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('videoId');
        if (!user) {
            return res.status(404).json({message:'User not found'});
        }
        return res.status(200).json({message:'User retrieved successfully',user: user});
    } catch (err) {
        console.error(err);
        return res.status(500).json({message:'Internal Server Error'});
    }
}

module.exports = {
    loginController, signupController, getUserController
};