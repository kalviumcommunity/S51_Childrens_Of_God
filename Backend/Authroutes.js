const express = require('express');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const signup = express.Router();
const userModel = require('./Loginmodel');
signup.use(express.json())

signup.post('/signup', async (req, res) => {
    try {
        const { Username, Password } = req.body;
        console.log(Password)
        // Check if password is provided and is a string
        if (!Password) {
            return res.status(400).json({ message: "Invalid password provided" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(Password, 10);

        const newUser = {
            Username : Username,
            Password: hashedPassword,
        };

        // Create new user
        const createdUser = await userModel.create(newUser);
        const createdUsername = createdUser.Username;

        // Generate JWT token with user ID
        const accessToken = jwt.sign({ createdUsername }, process.env.ACCESS_TOKEN_SECRET);

        res.status(201).json({ message: "Signup successful", accessToken: accessToken });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = { signup };
