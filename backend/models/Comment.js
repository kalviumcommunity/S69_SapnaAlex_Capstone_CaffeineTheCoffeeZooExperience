const mongoose = require("mongoose");

const Comments = new mongoose.Schema({
    username:{
        type: mongoose.Schema.Types.ObjectId, ref:"User", required: true
    },
    recipe: {type: mongoose.Schema.Types.ObjectId, ref:"Recipe", required: true},
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