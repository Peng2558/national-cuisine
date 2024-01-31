const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  id: Number,
  original: String,
 
});

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: String,
  instructions: String,
  extendedIngredients: [ingredientSchema], 
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Recipe = mongoose.model('Recipe', recipeSchema);
