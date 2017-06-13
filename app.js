//Set up server using the express framework. Listening on port 5000
var express = require('express');
var app = express();
var http = require('http').Server(app).listen(5000);
var io = require('socket.io')(http);

connections=[];
//What happens when user loads main page. Can do other pages by doing
// '/newPage' where newPage is the name of the page
app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

//Client Server Communication
io.on('connection', function(socket){
	if(connections.length < 2) {
		connections.push(socket);
		console.log('** %s players connected **', connections.length);
	} else {
		console.log('** WARNING: Another player tried to connect **');
		console.log('** They were forcefully removed from the server **');
		socket.disconnect();
	};
	
	socket.on('cardStat', function(dmg, health){

	});

	socket.on('cardLoc', function(oldLoc, newLoc){

	});

	socket.on('boardUpdate', function(){

	});


	
	socket.on('disconnect', function(){
		connections.splice(connections.indexOf(socket), 1);
		console.log('** %s players connected **', connections.length);
	});
});
















/*
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
*/

//const fs = require('fs');

/*
fs.readFile('index.html', (err, html) => {
	app.get('/', function(req, res){
		res.setHeader('Content-type', 'text/html');
		res.write(html);
		res.end();
	});
});
*/