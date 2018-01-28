var express = require('express');
var app = express();
app.use(function(req, res, next) {
	console.log('Server gestartet!');
	console.log(req.url);
	next();
});
app.use('/', express.static(__dirname + '/public'));
app.get('/speziell', function(req, res) {
	console.log('Eine Spezielle Datei wird ausgeliefert!');
	res.sendfile(__dirname + '/speziell.html');
});
app.get('/*', function(req, res) {
	res.status(404).sendfile(__dirname + '/public/error.html');
});
app.listen(3000); 