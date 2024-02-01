const User = require('../../models/user');
const Recipe = require('../../models/recipe');


module.exports = {
    create,
  };
  async function create(req, res) {
      
     const newRecipe = new Recipe(req.body);
     newRecipe.user = req.user._id;
     await newRecipe.save();
     console.log(newRecipe);
     res.json(newRecipe);
         
  }