var http = require ("http");

var PORT = 7000;
var PORTTWO = 7500

function favoriteColor(request, response) {
	response.end('Black');

}

function favoriteSong(request, response) {
	response.end('Through the Wire by Kanye West');

}

var server = http.createServer(favoriteColor);

server.listen(PORT, function () {
	console.log('we are live http://localhost/' + PORT);
})

var serverTwo = http.createServer(favoriteSong);

serverTwo.listen(PORTTWO, function () {
	console.log('we are live http://localhost/' + PORTTWO);
})