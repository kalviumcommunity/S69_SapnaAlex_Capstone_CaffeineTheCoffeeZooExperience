const express = require("express");
const { createCompanion, getAllCompanions, getCompanionById, updateCompanion, deleteCompanion } = require("../controllers/CoffeeCompanionController");

const router = express.Router();

router.post("/companions", createCompanion); 
router.get("/companions", getAllCompanions); 
router.get("/companions/:id", getCompanionById); 
router.put("/companions/:id", updateCompanion);
router.delete("/companions/:id", deleteCompanion);

module.exports = router;
