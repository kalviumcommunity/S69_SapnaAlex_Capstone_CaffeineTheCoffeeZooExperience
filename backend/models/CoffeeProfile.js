const mongoose = require("mongoose");

const CoffeeProfile = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    origin:{
        type: String,
    },
    flavourProfile:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("CoffeeProfile", CoffeeProfile);