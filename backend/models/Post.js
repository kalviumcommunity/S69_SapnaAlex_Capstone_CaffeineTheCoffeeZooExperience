const mongoose = require("mongoose");

const Post = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    picture:{
        type: String
    },
    postedOn:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("PostSchema", Post);