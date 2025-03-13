const mongoose = require("mongoose");

const Leaderboards = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    score:{
        type: Number
    },
    rank:{
        type: Number
    }
})

module.exports = mongoose.model("LeaderboardSchema", Leaderboards);