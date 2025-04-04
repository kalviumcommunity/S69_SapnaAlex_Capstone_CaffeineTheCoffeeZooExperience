const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, username: user.username, email: user.emailID }, 
        process.env.JWT_SECRET, 
        { expiresIn: '1h' }
    );
};

// User Registration
const register = async (req, res) => {
  try {
    console.log("Received request body:", req.body); // Debugging
    
    const { username, emailID, password } = req.body;
    
    let user = await User.findOne({ emailID });
    if (user) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ username, emailID, password: hashedPassword });

    await user.save();
    console.log("User saved:", user); // Debugging

    const token = generateToken(user);
    res.status(201).json({ message: 'User registered successfully', token, user: { id: user._id, username: user.username } });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: error.message });
  }
};

// Submission: Username-Password Authentication ✅


// User Login
const login = async (req, res) => {
  try {
    console.log("Login request received:", req.body);
    
    const { emailID, password } = req.body;
    const user = await User.findOne({ emailID });

    if (!user) {
      console.log("User not found");
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Password does not match");
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = generateToken(user);
    console.log("Login successful for user:", user.username);
    
    res.json({ token, user: { id: user._id, username: user.username } });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: error.message });
  }
};


// Update User Profile
const updateUser = async (req, res) => {
  try {
    const { username, emailID } = req.body;
    const user = await User.findById(req.user.id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    user.username = username || user.username;
    user.emailID = emailID || user.emailID;

    await user.save();
    res.json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete User
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login, updateUser, deleteUser };


