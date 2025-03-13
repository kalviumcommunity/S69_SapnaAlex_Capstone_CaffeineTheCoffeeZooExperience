const mongoose = require("mongoose");

const FileUpload = new mongoose.Schema({
    fileName:{
        type: String,
        required: true
    },
    fileType:{
        type: String,
        required
    },
    fileURL:{
        type: String,
        required: true
    },
    
},{timestamps: true});

module.exports = mongoose.model("fileUploadSchema", FileUpload);