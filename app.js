//***Most likely won't need to change***//
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var PORT = process.env.PORT || 5000;
connections=[];

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});
//***_____________________________***//



//This section is where connections and events are handled
//Check readme for quick socket.io tutorial
io.on('connection', function(socket){
	connections.push(socket);
	console.log('** %s players connected **', connections.length);

	socket.on('boardUpdate', function(data){
		socket.broadcast.emit('boardUpdate', data);
	});

	socket.on('phaseIndicator', function(data){
		socket.broadcast.emit('phaseIndicator', data);
	});

	socket.on('arenaUpdate', function(data){
		io.emit('arenaUpdate', data);
	});

	//+++ADD NEW LISTENERS HERE IF NEEDED+++//








	//---_______________________________---//

//***Most likely won't need to change***//
	socket.on('disconnect', function(){
		connections.splice(connections.indexOf(socket), 1);
		console.log('** %s players connected **', connections.length);
	});
});


http.listen(PORT, function(){
	console.log('Server listening on port:  %s , VIVA LA MEXICO', PORT);
})
//***_____________________________***//