//Set up server using the express framework. Listening on port 5000
var express = require('express');
var app = express();
var http = require('http').Server(app).listen(5000);
var io = require('socket.io')(http);

//Array of connected users
connections=[];

//What happens when user loads main page. Can do other pages by doing
// '/newPage' where newPage is the name of the page
app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

//Client Server Communication
io.on('connection', function(socket){
	//Prevents more than two connections
	if(connections.length < 2) {
		connections.push(socket);
		console.log('** %s players connected **', connections.length);
	} else {
		console.log('** WARNING: Another player tried to connect **');
		console.log('** They were forcefully removed from the server **');
		socket.disconnect();
	};
	//Basically Pipelines, takes data from client 1 and pushes
	//it through to client 2.	


	socket.on('cardStat', function(dmg, health){

	});

	//Pipe for board state. Takes client 1's board and puts it
	//in client 2's enemy board location & vice versa.
	socket.on('boardUpdate', function(data){
		socket.broadcast.emit('boardUpdate', data);
	});

	//Pipe for phase indicator state. When phase indicator is
	//updated on either client it is updated on other client too.
	socket.on('phaseIndicator', function(data){
		socket.broadcast.emit('phaseIndicator', data);
	});

	//Part of player cap / dev testing.
	socket.on('disconnect', function(){
		connections.splice(connections.indexOf(socket), 1);
		console.log('** %s players connected **', connections.length);
	});
});