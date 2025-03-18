const express = require("express");
const { createComment, getAllComments, getCommentById, updateComment, deleteComment } = require("../controllers/CommentController");

const router = express.Router();

router.post("/comments", createComment);
router.get("/comments", getAllComments); //Implemented Get API
router.get("/comments/:id", getCommentById); //Implemented Get API
router.put("/comments/:id", updateComment);
router.delete("/comments/:id", deleteComment);

module.exports = router;
