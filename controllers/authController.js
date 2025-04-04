const User = require('../models/User');

exports.signup = async (req, res) => {
    const {
        name,
        email,
        password
    } = req.body;
    try {
        const newUser = new User({
            name,
            email,
            password
        });
        await newUser.save();
        res.status(201).json({
            message: 'User registered'
        });
    } catch (err) {
        res.status(400).json({
            error: 'Signup failed'
        });
    }
};

exports.login = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    try {
        const user = await User.findOne({
            email,
            password
        });
        if (!user) return res.status(401).json({
            error: 'Invalid credentials'
        });

        res.status(200).json({
            message: 'Login successful',
            user
        });
    } catch (err) {
        res.status(400).json({
            error: 'Login failed'
        });
    }
};