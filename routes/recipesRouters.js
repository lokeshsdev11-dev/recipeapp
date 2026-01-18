// import modules
const express = require('express');
// const { getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipeController');

const {getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe} = require('../controllers/recipeController')
// import controllers




// create router object for managing Recipe routes
const recipeRouter = express.Router();

recipeRouter.get('/', getAllRecipes);
recipeRouter.get('/:id', getRecipeById);
recipeRouter.post('/', createRecipe);
recipeRouter.put('/:id', updateRecipe);
recipeRouter.delete('/:id', deleteRecipe);

// export the RecipeRouter
module.exports = recipeRouter;