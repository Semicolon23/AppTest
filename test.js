var express = require('express');
var app = express();
var fs = require('fs');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


fs.readFile('index.html', (err, html) => {
	app.get('/', function(req, res){
		res.setHeader('Content-type', 'text/html');
		res.write(html);
		res.end();
	});
});

app.post('/', function(req, res){



});


app.listen(app.get('port'), function(){
	console.log('Server running on port ', app.get('port'));
})


