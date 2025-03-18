const express = require("express");
const leaderboardController = require("../controllers/LeaderboardController");



const router = express.Router();

router.get("/leaderboard", leaderboardController.getLeaderboard);
router.get("/leaderboard/:id", leaderboardController.getLeaderboardById);
router.post("/leaderboard", leaderboardController.createLeaderboard);
router.put("/leaderboard/:id", leaderboardController.updateLeaderboard);
router.delete("/leaderboard/:id", leaderboardController.deleteLeaderboard);

module.exports = router;
