const Leaderboards = require("../models/Leaderboards");

exports.createLeaderboardEntry = async (req, res) => {
    try {
        const newEntry = new Leaderboards(req.body);
        await newEntry.save();
        res.status(201).json({ message: "Leaderboard entry created successfully!", entry: newEntry });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllLeaderboardEntries = async (req, res) => {
    try {
        const entries = await Leaderboards.find().sort({ score: -1 }); // Sorting by highest score
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getLeaderboardEntryById = async (req, res) => {
    try {
        const entry = await Leaderboards.findById(req.params.id);
        if (!entry) return res.status(404).json({ message: "Leaderboard entry not found" });
        res.status(200).json(entry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteLeaderboardEntry = async (req, res) => {
    try {
        await Leaderboards.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Leaderboard entry deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
