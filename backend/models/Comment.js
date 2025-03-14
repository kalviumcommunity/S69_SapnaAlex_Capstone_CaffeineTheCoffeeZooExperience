const mongoose = require("mongoose");

const Comments = new mongoose.Schema({
    username:{
        type: String
    },
    content:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("CommentSchema", Comments);