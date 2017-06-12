//Set up server using the express framework. Listening on port 5000
const express = require('express');
const app = express();
const http = require('http').Server(app).listen(5000);
const io = require('socket.io')(http);

//What happens when user loads main page. Can do other pages by doing
// '/newPage' where newPage is the name of the page
app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

//Client Server Communication
io.on('connection', function(socket){

	

	socket.on('disconnect', function(){

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