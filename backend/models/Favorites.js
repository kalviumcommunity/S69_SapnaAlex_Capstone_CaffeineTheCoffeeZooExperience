const mongoose = require("mongoose");

const Favorites = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, ref:"User", required: true
    },
    recipes: [{type: mongoose.Schema.Types.ObjectId, ref:"Recipe", required: true}]
})

module.exports = mongoose.model("FavoritesSchema", Favorites);