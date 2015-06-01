/*******************************

		Test Server

*******************************/

//This requires the express module
//accessible here http://expressjs.com/
//install with 'npm install express --save'
var express = require('express');

//https://github.com/expressjs/body-parser
//npm install body-parser
var bodyParser = require('body-parser');

//store the express module
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));


app.post('/action', function(req,res) {
	res.send('You selected ' + req.body.countrySelect + ' to perform ' +req.body.actionSelect + ' on ' + req.body.targetSelect);
});

app.listen(8080,function() {
	console.log('Server running at http://127.0.0.1:8080/')
});