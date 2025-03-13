const mongoose = require("mongoose");

const CoffeeCompanion = new mongoose.Schema({
    CompanionName:{
        type: String,
        required: true
    },
    personality:{
        type: String,
        required: true
    },
    coffeeProfile:{
        type: String
    }
})

module.exports = mongoose.model("CoffeeCompanion", CoffeeCompanion);