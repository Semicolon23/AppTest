//***Most likely won't need to change***//
var express = require('express');
var pg = require('pg');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var PORT = process.env.PORT || 5000;
connections=[];
var postgres = 'postgres://zzfoijmjnpckbt:72b109361166e43307b0c3e29c50e4f44578a77d15398669a70e578b11f80ebf@ec2-23-23-93-255.compute-1.amazonaws.com:5432/d5j5918lt7is6t';

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

	socket.on('deckInit', function(data){
	//DB REF GOES HERE, PUT CARDS INTO VAR DECK
		console.log('DECKINIT APPJS ');
		pg.defaults.ssl = true;
		pg.connect(process.env.postgres, function(err, client)
		{
			if (err) throw err;
		
			console.log('Connected to postgres! Getting schemas...');
		
			client
			.query('SELECT * FROM champions;')
			.on('row', function(row) 
			{
				console.log(JSON.stringify(row));
		
				console.log('retrieved champions');
			});
		});
	});
	
	
		
		
		//io.emit('deckInit', data);
		//db url below:
		//postgres://zzfoijmjnpckbt:72b109361166e43307b0c3e29c50e4f44578a77d15398669a70e578b11f80ebf@ec2-23-23-93-255.compute-1.amazonaws.com:5432/d5j5918lt7is6t


		//*************************************
		//socket.emit(deckInit, deck);
		
		


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