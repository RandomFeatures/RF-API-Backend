var express = require('express');
var gamesDBO = require("./data/games.json");
var router = express.Router();

//get all games
router.get('/', function(req, res) {
   res.send(gamesDBO);
});

//get specific item by id
router.get('/id/:id', function (req, res) {
	//grab just the one item
	var game = gamesDBO.filter(function (obj) {
			return obj.id == req.params.id;
		})[0];

	res.send(game);

}); 

//get specific item by id
router.get('/:name', function (req, res) {
	//grab just the one item
	var game = gamesDBO.filter(function (obj) {
			return obj.localurl == req.params.name;
		})[0];

	res.send(game);

}); 


module.exports = router;