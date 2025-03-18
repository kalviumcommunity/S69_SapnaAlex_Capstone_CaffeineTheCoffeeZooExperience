const express = require("express");
const { uploadFile, getAllFiles, getFileById, deleteFile } = require("../controllers/FileUploadController");

const router = express.Router();

router.post("/files", uploadFile);
router.get("/files", getAllFiles); //Implemented Get API
router.get("/files/:id", getFileById); //Implemented Get API
router.delete("/files/:id", deleteFile);

module.exports = router;
