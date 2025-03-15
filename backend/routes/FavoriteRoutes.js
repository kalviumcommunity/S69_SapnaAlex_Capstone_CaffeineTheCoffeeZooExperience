const express = require("express");
const { addFavorite, getAllFavorites, getFavoriteById, removeFavorite } = require("../controllers/FavoriteController");

const router = express.Router();

router.post("/favorites", addFavorite);
router.get("/favorites", getAllFavorites);
router.get("/favorites/:id", getFavoriteById);
router.delete("/favorites/:id", removeFavorite);

module.exports = router;
