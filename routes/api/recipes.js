const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/api/recipes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


router.post('/favorites',recipesCtrl.create);

module.exports = router;