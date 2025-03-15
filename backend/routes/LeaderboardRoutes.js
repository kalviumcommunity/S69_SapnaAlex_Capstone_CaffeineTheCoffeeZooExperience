const express = require("express");
const { createLeaderboardEntry, getAllLeaderboardEntries, getLeaderboardEntryById, deleteLeaderboardEntry } = require("../controllers/LeaderboardController");

const router = express.Router();

router.post("/leaderboards", createLeaderboardEntry);
router.get("/leaderboards", getAllLeaderboardEntries);
router.get("/leaderboards/:id", getLeaderboardEntryById);
router.delete("/leaderboards/:id", deleteLeaderboardEntry);

module.exports = router;
