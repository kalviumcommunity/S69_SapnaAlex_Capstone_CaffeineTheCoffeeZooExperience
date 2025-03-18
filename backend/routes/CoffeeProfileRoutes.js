const express = require("express");
const { createProfile, getAllProfiles, getProfileById, updateProfile, deleteProfile } = require("../controllers/CoffeeProfileController");

const router = express.Router();

// Post
router.post("/", createProfile); 

router.get("/profiles", getAllProfiles); //Implemented Get API
router.get("/profiles/:id", getProfileById); //Implemented Get API
router.put("/profiles/:id", updateProfile);
router.delete("/profiles/:id", deleteProfile);

module.exports = router;
