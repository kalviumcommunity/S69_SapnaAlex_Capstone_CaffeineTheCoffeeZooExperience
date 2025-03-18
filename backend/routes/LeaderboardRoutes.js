const express = require("express");
const leaderboardController = require("../controllers/LeaderboardController");



const router = express.Router();

router.get("/leaderboard", leaderboardController.getLeaderboard); //Implemented Get API
router.get("/leaderboard/:id", leaderboardController.getLeaderboardById); //Implemented Get API
router.post("/leaderboard", leaderboardController.createLeaderboard);
router.put("/leaderboard/:id", leaderboardController.updateLeaderboard);
router.delete("/leaderboard/:id", leaderboardController.deleteLeaderboard);

module.exports = router;
