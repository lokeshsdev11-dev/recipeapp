const Recipe = require('../models/recipe')

const recipeController = {

    getAllRecipes: async (req, res) => {
        try {
            const recipes = await Recipe.find();
            res.status(200).json(recipes);
        } catch (error) {
            res.status(500).json({ message: "Failed to fetch recipes", error: error.message });
        }
    },
    getRecipeById: async (req, res) => {
        try {
            const { id } = req.params;
            const recipe = await Recipe.findById(id);
            res.status(200).json(recipe);
        }
        catch (error) {
            res.status(500).json({ message: "Failed to fetch recipe", error: error.message });
        }
    },
    createRecipe: async (req, res) => {
        try {
            const { name, ingredients, instructions } = req.body;
            const newRecipe = new Recipe({
                name,
                ingredients,
                instructions
            });
            await newRecipe.save();
            res.status(201).json(newRecipe);
        }
        catch (error) {
            res.status(500).json({ message: "Failed to create recipe", error: error.message });
        }
    },
    updateRecipe: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, ingredients, instructions } = req.body;
            await Recipe.findByIdAndUpdate(id, { name, ingredients, instructions });
            res.status(201).json({ message: 'recipe updated successfully' });
        }
        catch (error) {
            res.status(500).json({ message: "Failed to update recipe", error: error.message });
        }
    },
    deleteRecipe: async (req, res) => {
        
        try{
            const { id } = req.params;
        await Recipe.findByIdAndDelete(id);
        res.status(200).json({ message: 'recipe deleted successfully' })
        }
        catch (error) {
            res.status(500).json({ message: "Failed to delete recipe", error: error.message });
        }
    }
}

module.exports = recipeController;