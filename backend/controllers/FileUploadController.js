const FileUpload = require("../models/FileUpload");

exports.uploadFile = async (req, res) => {
    try {
        const newFile = new FileUpload(req.body);
        await newFile.save();
        res.status(201).json({ message: "File uploaded successfully!", file: newFile });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Implemented Get API
exports.getAllFiles = async (req, res) => {
    try {
        const files = await FileUpload.find();
        res.status(200).json(files);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Implemented Get API
exports.getFileById = async (req, res) => {
    try {
        const file = await FileUpload.findById(req.params.id)
            .populate("user", "name email"); // Fetch uploader info

        if (!file) return res.status(404).json({ message: "File not found" });

        res.status(200).json(file);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.deleteFile = async (req, res) => {
    try {
        await FileUpload.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "File deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
