const express = require("express");
const { createProfile, getAllProfiles, getProfileById, updateProfile, deleteProfile } = require("../controllers/CoffeeProfileController");

const router = express.Router();

router.post("/", createProfile);

router.get("/profiles", getAllProfiles);
router.get("/profiles/:id", getProfileById);
router.put("/profiles/:id", updateProfile);
router.delete("/profiles/:id", deleteProfile);

module.exports = router;
