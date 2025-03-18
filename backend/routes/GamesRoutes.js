const express = require("express");
const { createGame, getAllGames, getGameById, updateGame, deleteGame } = require("../controllers/GamesController");

const router = express.Router();

router.post("/games", createGame);
router.get("/games", getAllGames); //Implemented Get API
router.get("/games/:id", getGameById); //Implemented Get API
router.put("/games/:id", updateGame);
router.delete("/games/:id", deleteGame);

module.exports = router;
