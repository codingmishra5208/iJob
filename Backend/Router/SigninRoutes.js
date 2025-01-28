const express = require('express');
const router = express.Router();
const User = require('../Model/userSchema');
const bcrypt = require('bcrypt');


router.post('/', async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
    }
    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(409).json ({ message: "User already exists" });
        }
        const signupTime = new Date();
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', signupTime });
    } catch (err) {
        res.status(500).json({ error: err.message });
        console.error(err.message);
    }
});



module.exports = router;