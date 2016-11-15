var express = require('express');
var wallpaperDBO = require("./data/wallpaper.json");
var router = express.Router();

//get all wallpapers
router.get('/', function (req, res) {
	res.send(wallpaperDBO);
});

//get specific item by id
router.get('/id/:id', function (req, res) {
	//grab just the one item
	var wallpaper = wallpaperDBO.filter(function (obj) {
			return obj.id == req.params.id;
		})[0];
 
	if (wallpaper != null)
		res.status(200).send(wallpaper);
	else
		res.status(404).send('404: Resource not Found');

});

//get specific item by name
router.get('/:name', function (req, res) {
	//grab just the one item
	var wallpaper = wallpaperDBO.filter(function (obj) {
			return obj.localurl == req.params.name;
		})[0];

	if(wallpaper != null)
		res.status(200).send(wallpaper);
	else
		res.status(404).send('404: Resource not Found');

});

module.exports = router;
