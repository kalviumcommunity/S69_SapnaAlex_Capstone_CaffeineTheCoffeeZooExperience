const express = require("express");
const upload = require("../middlewares/multer"); 
const { uploadFile, getAllFiles, getFileById, deleteFile } = require("../controllers/FileUploadController");

const router = express.Router();

router.post("/", upload.single("file"), uploadFile); 
router.get("/", getAllFiles);
router.get("/:id", getFileById); 
router.delete("/:id", deleteFile);

module.exports = router;
