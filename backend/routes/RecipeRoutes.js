const express = require("express");
const { createRecipe, getRecipesByUser, updateRecipe, deleteRecipe, getAllRecipes } = require("../controllers/RecipeController");

const router = express.Router();

router.post("/recipes", createRecipe);
router.get("/recipes", getAllRecipes); //Implemented Get API
router.get("/recipes/:userId", getRecipesByUser); //Implemented Get API
router.put("/recipes/:id", updateRecipe);
router.delete("/recipes/:id", deleteRecipe);

module.exports = router;
