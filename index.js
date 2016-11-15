var express = require('express');
var games = require('./app/games');
var news = require('./app/news');
var wallpapers = require('./app/wallpapers');

var app = express();

app.use('/games', games);
app.use('/news', news);
app.use('/wallpapers', wallpapers);

// Handle 404 error.
app.use("*", function (req, res) {
	res.send('404: Resource not Found', 404);
});

// Handle 500
app.use(function (error, req, res, next) {
	res.send('500: Internal Server Error', 500);
});

app.listen(8081, function () {
	console.log("Live at Port 8081");
});
