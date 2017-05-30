var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();


app.get('/', function(req, res){
	res.send('Hello World');
});


app.listen(5555, function(){
	console.log('Server Started on Port 5555');
})

