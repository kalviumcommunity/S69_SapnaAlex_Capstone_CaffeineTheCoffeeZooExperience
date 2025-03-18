const mongoose = require("mongoose");

const FileUpload = new mongoose.Schema({
    uploadeBy:{
        type: mongoose.Schema.Types.ObjectId, ref:"User"
    },
    fileName:{
        type: String,
        required: true
    },
    fileType:{
        type: String,
        required: true
    },
    fileURL:{
        type: String,
        required: true
    },
    relatedPost:{
        type: mongoose.Schema.Types.ObjectId, ref:"Post"
    }
    
},{timestamps: true});

module.exports = mongoose.model("FileUploadSchema", FileUpload);