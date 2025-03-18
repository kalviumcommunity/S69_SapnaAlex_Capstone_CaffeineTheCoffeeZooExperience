const express = require("express");
const { addFavorite, getAllFavorites, getFavoriteById, removeFavorite } = require("../controllers/FavoriteController");

const router = express.Router();

router.post("/favorites", addFavorite);
router.get("/favorites", getAllFavorites); //Implemented Get API
router.get("/favorites/:id", getFavoriteById); //Implemented Get API
router.delete("/favorites/:id", removeFavorite);

module.exports = router;
