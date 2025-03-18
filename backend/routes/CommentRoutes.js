const express = require("express");
const { createComment, getAllComments, getCommentById, updateComment, deleteComment } = require("../controllers/CommentController");

const router = express.Router();

// Post
router.post("/comments", createComment); 
router.get("/comments", getAllComments); 
router.get("/comments/:id", getCommentById); 
router.put("/comments/:id", updateComment);
router.delete("/comments/:id", deleteComment);

module.exports = router;
