const express = require('express');
const app = express();
const fs = require('fs');
const EventEmitter = require('events');

class emitter extends EventEmitter{}

const testEmitter = new emitter();
testEmitter.on('event', () => {
	console.log('event happened@');
});

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


fs.readFile('index.html', (err, html) => {
	app.get('/', function(req, res){
		res.setHeader('Content-type', 'text/html');
		res.write(html);
		
		res.end();
	});
});



app.listen(app.get('port'), function(){
	console.log('Server running on port ', app.get('port'));
})