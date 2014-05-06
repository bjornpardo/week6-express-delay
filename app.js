var express = require('express');
var app = express();

app.get('/', function(req, res) {
	setTimeout(function(){res.send('<h1>oh hi there</h1>')}, 5000);
});

var server = app.listen(4461, function() {
	console.log('Express server listening on port ' + server.address().port);
});
