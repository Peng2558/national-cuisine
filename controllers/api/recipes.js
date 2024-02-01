const User = require('../../models/user');
const Recipe = require('../../models/recipe');


module.exports = {
    create,index
  };
  async function create(req, res) {
      
     const newRecipe = new Recipe(req.body);
     newRecipe.user = req.user._id;
     await newRecipe.save();
     console.log(newRecipe);
     res.json(newRecipe);
         
  }
  async function index(req, res) {
    
    const userId = req.user._id;
    const favorites = await Recipe.find({ user: userId}); 
    res.json(favorites);
   
}