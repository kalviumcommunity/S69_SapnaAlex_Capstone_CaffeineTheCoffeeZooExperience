const mongoose = require("mongoose");

const Games = new mongoose.Schema({
    gameName:{
        type: String,
        required: true
    },
    difficultyLevel:{
        type: String,
        enum: [easy, moderate, hard],
        required: true
    },
    Type:{
        type: String,
        enum:[Bean-Hunt, Brew-Master],
        required: true
    },
    description:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model("gamesSchema", Games);