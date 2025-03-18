const CoffeeProfile = require("../models/CoffeeProfile");


// Post
exports.createProfile = async (req, res) => {
    try {
        const { name, origin, flavourProfile, description } = req.body;

        if (!name || !flavourProfile || !description) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const newProfile = new CoffeeProfile({ name, origin, flavourProfile, description });
        await newProfile.save();

        res.status(201).json({ message: "Coffee Profile created successfully!", profile: newProfile });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getAllProfiles = async (req, res) => {
    try {
        const profiles = await CoffeeProfile.find();
        res.status(200).json(profiles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getProfileById = async (req, res) => {
    try {
        const profile = await CoffeeProfile.findById(req.params.id)
            .populate("coffeeSpecies", "CompanionName origin")
            .populate("user","username email");
        if (!profile) return res.status(404).json({ message: "Profile not found" });
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const updatedProfile = await CoffeeProfile.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Profile updated successfully", profile: updatedProfile });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteProfile = async (req, res) => {
    try {
        await CoffeeProfile.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Profile deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
