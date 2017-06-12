const express = require('express');
const app = express();
const http = require('http').Server(app).listen(5000);
//const fs = require('fs');
const io = require('socket.io')(http);

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){



	socket.on('disconnect', function(){

	});
});

/*
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
*/

/*
fs.readFile('index.html', (err, html) => {
	app.get('/', function(req, res){
		res.setHeader('Content-type', 'text/html');
		res.write(html);
		res.end();
	});
});
*/