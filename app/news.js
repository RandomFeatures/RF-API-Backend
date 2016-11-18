var express = require('express');
var newsDBO = require("./data/news.json");
var router = express.Router();

//get all news items 
router.get('/', function (req, res) {
	res.type('json').status(200).send(newsDBO);
});

//get specific item by id
router.get('/:id', function (req, res) {
	//grab just the one item
	var newsItem = newsDBO.filter(function (obj) {
			return obj.id == req.params.id;
		})[0];

	if (newsItem != null)
		res.type('json').status(200).send(newsItem);
	else
		res.status(404).send('404: Resource not Found');

});

module.exports = router;
