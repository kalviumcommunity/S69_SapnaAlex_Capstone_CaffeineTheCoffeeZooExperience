const express = require("express");
const { createGame, getAllGames, getGameById, updateGame, deleteGame } = require("../controllers/GamesController");

const router = express.Router();

// Post
router.post("/games", createGame); 
router.get("/games", getAllGames); 
router.get("/games/:id", getGameById); 
router.put("/games/:id", updateGame);
router.delete("/games/:id", deleteGame);

module.exports = router;
