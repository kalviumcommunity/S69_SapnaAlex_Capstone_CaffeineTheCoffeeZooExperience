const Recipe = require("../models/Recipe");


// Post
exports.createRecipe = async (req, res) => {
    try {
        const newRecipe = new Recipe({ ...req.body, userId: req.user.id });
        await newRecipe.save();
        res.status(201).json({ message: "Recipe created successfully!", recipe: newRecipe });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getAllRecipes = async (req, res) => {
    try {
        const { userId } = req.query;

        let filter = {};
        if (userId) {
            filter = { user: userId };
        }

        const recipes = await Recipe.find(filter)
            .populate("user", "name email") 
            .sort({ createdAt: -1 }); 

        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



exports.getRecipesByUser = async (req, res) => {
    try {
        const recipes = await Recipe.find({ userId: { $in: [req.user.id, req.params.userId] } });
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateRecipe = async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Recipe updated successfully", recipe: updatedRecipe });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteRecipe = async (req, res) => {
    try {
        await Recipe.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Recipe deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
