var express = require('express');
var app = express();
var fs = require('fs');
var events = require('events');

var ee = new events.EventEmitter();

ee.on("test", function(){
	
});

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


fs.readFile('index.html', (err, html) => {
	app.get('/', function(req, res){
		res.setHeader('Content-type', 'text/html');
		console.log('Jeez');
		res.write(html);
		res.end();
	});
});

app.listen(app.get('port'), function(){
	console.log('Server running on port ', app.get('port'));
})


