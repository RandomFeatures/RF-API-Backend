var express = require('express');
var newsDBO = require("./data/news.json");
var router = express.Router();

//get all news items in desinding order
router.get('/', function (req, res) {
	res.send(newsDBO);
});

//get specific item by id
router.get('/:id', function (req, res) {
	//grab just the one item
	var newsItem = newsDBO.filter(function (obj) {
			return obj.id == req.params.id;
		})[0];

	res.send(newsItem);

});

module.exports = router;
