const express = require("express");
const { uploadFile, getAllFiles, getFileById, deleteFile } = require("../controllers/FileUploadController");

const router = express.Router();

router.post("/files", uploadFile);
router.get("/files", getAllFiles);
router.get("/files/:id", getFileById);
router.delete("/files/:id", deleteFile);

module.exports = router;
