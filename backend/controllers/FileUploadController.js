const cloudinary = require("../config/cloudinary");
const FileUpload = require("../models/FileUpload"); 
const Users = require("../models/User"); // Import User model

const uploadFile = async (req, res) => {
    try {
        console.log("Uploaded file details from Cloudinary:", req.file);

        if (!req.file || !req.file.path) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const { uploadedBy } = req.body;
        console.log("Uploaded by user ID:", uploadedBy); // Log the uploadedBy value
        if (!uploadedBy) {
            return res.status(400).json({ error: "Invalid user ID" });
        }

        // Validate user ID
        const user = await Users.findById(uploadedBy);
        console.log
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        // Save file details in MongoDB
        const newFile = new FileUpload({
            url: req.file.path,  // Cloudinary URL
            publicId: req.file.filename || req.file.public_id, // Ensure correct mapping
            originalname: req.file.originalname,
            mimetype: req.file.mimetype,
            size: req.file.size,
            uploadedBy: uploadedBy,
        });

        const savedFile = await newFile.save();
        console.log("Saved file in MongoDB:", savedFile);

        // Include fileUrl in the response
        res.status(201).json({ 
            message: "File uploaded successfully", 
            file: savedFile, 
            fileUrl: savedFile.url 
        });

    } catch (error) {
        console.error("File upload error:", error.message);
        res.status(500).json({ error: error.message });
    }
};


const getAllFiles = async (req, res) => {
    try {
        const files = await FileUpload.find().populate("uploadedBy", "name");
        res.json(files);
    } catch (error) {
        res.status(500).json({ message: "Error fetching files", error });
    }
};


const getFileById = async (req, res) => {
    try {
        const file = await FileUpload.findById(req.params.id);
        if (!file) return res.status(404).json({ message: "File not found" });
        res.json(file);
    } catch (error) {
        res.status(500).json({ message: "Error fetching file", error });
    }
};


const deleteFile = async (req, res) => {
    try {
      const file = await FileUpload.findById(req.params.id);
      if (!file) return res.status(404).json({ message: "File not found" });
  
      // Delete from Cloudinary
      await cloudinary.uploader.destroy(file.publicId);
  
      // Remove from MongoDB
      await FileUpload.findByIdAndDelete(req.params.id);
  
      res.json({ message: "File deleted successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting file", error });
    }
  };

module.exports = { uploadFile, getAllFiles, getFileById, deleteFile };
