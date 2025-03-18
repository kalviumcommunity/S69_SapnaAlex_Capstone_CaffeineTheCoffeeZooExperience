const Comment = require("../models/Comment");

exports.createComment = async (req, res) => {
    try {
        const newComment = new Comment(req.body);
        await newComment.save();
        res.status(201).json({ message: "Comment added successfully!", comment: newComment });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Implemented Get API
exports.getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Implemented Get API
exports.getCommentById = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id)
            .populate("user", "name email"); 
            
        if (!comment) return res.status(404).json({ message: "Comment not found" });

        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updateComment = async (req, res) => {
    try {
        const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Comment updated successfully", comment: updatedComment });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteComment = async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
