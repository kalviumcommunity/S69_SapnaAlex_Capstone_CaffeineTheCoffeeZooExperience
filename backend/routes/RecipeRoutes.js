const express = require("express");
const { createRecipe, getRecipesByUser, updateRecipe, deleteRecipe, getAllRecipes } = require("../controllers/RecipeController");

const router = express.Router();

// Post
router.post("/recipes", createRecipe); 
router.get("/recipes", getAllRecipes); 
router.get("/recipes/:userId", getRecipesByUser); 
router.put("/recipes/:id", updateRecipe);
router.delete("/recipes/:id", deleteRecipe);

module.exports = router;
