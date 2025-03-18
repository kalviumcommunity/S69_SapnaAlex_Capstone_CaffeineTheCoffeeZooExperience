const express = require("express");
const{ createUser, getAllUsers, getUserById, updateUser, deleteUser } = require("../controllers/UserController");


const router = express.Router();

router.post("/users", createUser);
router.get("/users", getAllUsers); //Implemented Get API
router.get("/users/:id", getUserById); //Implemented Get API
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router