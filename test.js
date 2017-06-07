const express = require('express');
const app = express();
//const server = require('http').createServer(app)
const fs = require('fs');
const io = require('socket.io').listen(server);

users = [];
connections [];




app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


fs.readFile('index.html', (err, html) => {
	app.get('/', function(req, res){
		res.setHeader('Content-type', 'text/html');
		res.write(html);
		
		res.end();
	});
});

io.sockets.on('connection', function(socket) {
	connections.push(socket);

	socket.on('disconnect', function(data){
		connections.splice(connections.indexOf(socket), 1);
	});

	socket.on('send message', function(data){
		io.sockets.emit('new message', {msg: data});
	});
	
});

app.listen(app.get('port'), function(){
	console.log('Server running on port ', app.get('port'));
})