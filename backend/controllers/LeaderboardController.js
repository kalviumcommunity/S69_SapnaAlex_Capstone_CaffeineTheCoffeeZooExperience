const Leaderboards = require("../models/Leaderboards");



//Implemented Get API
const getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await Leaderboards.find();
        res.status(200).json(leaderboard);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Implemented Get API
const getLeaderboardById = async (req, res) => {
    try {
        const leaderboardEntry = await Leaderboards.findById(req.params.id);
        if (!leaderboardEntry) {
            return res.status(404).json({ message: "Entry not found" });
        }
        res.status(200).json(leaderboardEntry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createLeaderboard = async (req, res) => {
    try {
        const newEntry = new Leaderboards(req.body);
        await newEntry.save();
        res.status(201).json({ message: "Leaderboard entry created successfully", entry: newEntry });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateLeaderboard = async (req, res) => {
    try {
        const updatedEntry = await Leaderboards.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEntry) {
            return res.status(404).json({ message: "Entry not found" });
        }
        res.status(200).json({ message: "Leaderboard entry updated", entry: updatedEntry });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteLeaderboard = async (req, res) => {
    try {
        const deletedEntry = await Leaderboards.findByIdAndDelete(req.params.id);
        if (!deletedEntry) {
            return res.status(404).json({ message: "Entry not found" });
        }
        res.status(200).json({ message: "Leaderboard entry deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    getLeaderboard,
    getLeaderboardById,
    createLeaderboard,
    updateLeaderboard,
    deleteLeaderboard
};
