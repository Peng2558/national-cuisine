const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ingredientSchema = new Schema({
  id: Number,
  original: String,
 
});

const recipeSchema = new Schema({
  title: { type: String, required: true },
  image: String,
  instructions: String,
  extendedIngredients: [ingredientSchema], 
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Recipe', recipeSchema);
