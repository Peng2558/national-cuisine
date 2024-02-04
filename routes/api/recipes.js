const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/api/recipes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', recipesCtrl.getData);
router.get('/cuisine', recipesCtrl.getCuisineData);
router.get('/recipe', recipesCtrl.getRecipeDetails);
router.post('/favorites',recipesCtrl.create);
router.get('/favorites', recipesCtrl.index);
module.exports = router;