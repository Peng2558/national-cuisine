const User = require('../../models/user');
const Recipe = require('../../models/recipe');
const BASE_URL = `https://api.spoonacular.com/recipes/`;

module.exports = {
    create,index,getData,getCuisineData
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

async function getData(req,res){
  try{
    const response = await fetch (`${BASE_URL}/random?apiKey=${process.env.API_KEY}&number=9`);
    const recipes = await response.json();
    res.json(recipes);
  
  } catch(err){

    console.log(err);
    res.status(400).json(err);
  }
 
}
async function getCuisineData(req,res){
  try{
   
    const {cuisine} = req.query;
    const response = await fetch (`${BASE_URL}/complexSearch?apiKey=${process.env.API_KEY}&cuisine=${cuisine}&number=9`);
    const recipes = await response.json();
    res.json(recipes);
  
  } catch(err){

    console.log(err);
    res.status(400).json(err);
  }
 
}