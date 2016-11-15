var express = require('express');
var wallpaperDBO = require("./data/wallpaper.json");
var router = express.Router();

router.get('/', function(req, res) {
     res.send(wallpaperDBO);
});

//get specific item by id
router.get('/id/:id', function (req, res) {
	//grab just the one item
	var wallpaper = wallpaperDBO.filter(function (obj) {
			return obj.id == req.params.id;
		})[0];

		res.send(wallpaper);

		
}); 

//get specific item by id
router.get('/:name', function (req, res) {
	//grab just the one item
	var wallpaper = wallpaperDBO.filter(function (obj) {
			return obj.localurl == req.params.name;
		})[0];

	res.send(wallpaper);

}); 

module.exports = router;