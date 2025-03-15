const CoffeeCompanion = require("../models/CoffeeCompanion");

exports.createCompanion = async (req, res) => {
    try {
        const newCompanion = new CoffeeCompanion(req.body);
        await newCompanion.save();
        res.status(201).json({ message: "Coffee Companion created successfully!", companion: newCompanion });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllCompanions = async (req, res) => {
    try {
        const companions = await CoffeeCompanion.find();
        res.status(200).json(companions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCompanionById = async (req, res) => {
    try {
        const companion = await CoffeeCompanion.findById(req.params.id);
        if (!companion) return res.status(404).json({ message: "Companion not found" });
        res.status(200).json(companion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateCompanion = async (req, res) => {
    try {
        const updatedCompanion = await CoffeeCompanion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Companion updated successfully", companion: updatedCompanion });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteCompanion = async (req, res) => {
    try {
        await CoffeeCompanion.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Companion deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
