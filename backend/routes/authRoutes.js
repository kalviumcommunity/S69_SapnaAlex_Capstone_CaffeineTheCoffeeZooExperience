const express = require('express');
const { register, login } = require('../controllers/authController');
const protect = require('../middlewares/authMiddleware'); // Import protect middleware
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
const { updateUser, deleteUser } = require('../controllers/authController'); // Import controllers

router.put('/updateProfile', protect, updateUser); // Protected route
router.delete('/deleteUser', protect, deleteUser); // Protected route


// Protected route to check if JWT is working
router.get('/profile', protect, (req, res) => {
    res.json({ message: "JWT is valid!", user: req.user });
});

module.exports = router;
