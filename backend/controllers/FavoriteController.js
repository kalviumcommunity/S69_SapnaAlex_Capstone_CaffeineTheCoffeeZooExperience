const Favorites = require("../models/Favorites");

exports.addFavorite = async (req, res) => {
    try {
        const newFavorite = new Favorites(req.body);
        await newFavorite.save();
        res.status(201).json({ message: "Favorite added successfully!", favorite: newFavorite });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllFavorites = async (req, res) => {
    try {
        const favorites = await Favorites.find();
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getFavoriteById = async (req, res) => {
    try {
        const favorite = await Favorites.findById(req.params.id)
            .populate("user", "username email")
            .populate("recipe", "title description");
        if (!favorite) return res.status(404).json({ message: "Favorite not found" });
        res.status(200).json(favorite);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.removeFavorite = async (req, res) => {
    try {
        await Favorites.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Favorite removed successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
