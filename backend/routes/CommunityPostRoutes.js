const express = require("express");
const { createPost, getAllPosts, getPostById, deletePost } = require("../controllers/CommunityPostController");

const router = express.Router();

router.post("/posts", createPost); 
router.get("/posts", getAllPosts); 
router.get("/posts/:id", getPostById); 
router.delete("/posts/:id", deletePost);

module.exports = router;
