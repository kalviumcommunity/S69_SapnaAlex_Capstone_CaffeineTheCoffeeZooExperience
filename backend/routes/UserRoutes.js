const express = require("express");
const{ createUser, getAllUsers, getUserById, updateUser, deleteUser, loginUser } = require("../controllers/UserController");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/login", loginUser);
router.get("/protected-routes", protect, (req, res) => {
    res.json({ message: "This is a protected route", user: req.user });
});
router.post("/users", protect, createUser); 
router.get("/users", protect, getAllUsers); 
router.get("/users/:id", protect, getUserById); 
router.put("/users/:id", protect, updateUser);
router.delete("/users/:id", protect, deleteUser);

module.exports = router