const Games = require("../models/Games");

exports.createGame = async (req, res) => {
    try {
        const newGame = new Games(req.body);
        await newGame.save();
        res.status(201).json({ message: "Game created successfully!", game: newGame });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllGames = async (req, res) => {
    try {
        const games = await Games.find();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getGameById = async (req, res) => {
    try {
        const game = await Games.findById(req.params.id);
        if (!game) return res.status(404).json({ message: "Game not found" });
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateGame = async (req, res) => {
    try {
        const updatedGame = await Games.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Game updated successfully", game: updatedGame });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteGame = async (req, res) => {
    try {
        await Games.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Game deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
