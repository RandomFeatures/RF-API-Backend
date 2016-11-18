var express = require('express');
var games = require('./app/games');
var news = require('./app/news');
var cors = require('cors')
var app = express();

//CORS middleware
app.use(cors())

app.use('/api/games', games);
app.use('/api/news', news);

// Handle 404 error.
app.use("*", function (req, res) {
	res.status(404).send('404: Resource not Found');
});

// Handle 500
app.use(function (error, req, res, next) {
	res.status(500).send('500: Internal Server Error');
});

app.listen(8081, function () {
	console.log("Live at Port 8081");
});
