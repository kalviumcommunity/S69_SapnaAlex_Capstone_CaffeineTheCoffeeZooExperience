const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

// Submission: Username-Password Authentication ✅


const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1]; // Extract token
    } else {
        return res.status(401).json({ error: "Not authorized, token missing" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password"); // Attach user to request
        if (!req.user) {
            return res.status(404).json({ error: "User not found!" });
        }
        next();
    } catch (error) {
        res.status(401).json({ error: "Not authorized, invalid or expired token" });
    }
};

module.exports = protect;
