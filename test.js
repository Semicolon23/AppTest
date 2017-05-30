const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

var logger = function(req, res, next) {
	console.log('Logging...');
	next();
}

app.use(logger);

app.get('/', function(req, res){
	res.send('Hello World');
});


app.listen(5555, function(){
	console.log('Server Started on Port 5555');
})


