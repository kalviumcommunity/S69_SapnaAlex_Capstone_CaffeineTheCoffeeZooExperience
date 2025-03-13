const mongoose = require("mongoose");

const Favorites = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    ingredients:{
        type: String,
        required: true
    },
    preparationTime:{
        hours:{
            type: Number,
            default: 0
        },
        minutes:{
            type: Number,
            default: 0
        }
    },
    recipe: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("FavoritesSchema", Favorites);