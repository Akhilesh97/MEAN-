var express = require('express'); 
var bodyParser = require('body-parser'); 
var app = express();
var MongoClient = require('mongodb').MongoClient;
var expressValidator = require('express-validator');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(expressValidator());
app.get('/', function (req, res) {  
	console.log("Got a GET request for the homepage");  
	res.sendFile( __dirname + "/" + "insert.html" );
})

app.post('/process_post',urlencodedParser, function (req, res) { 
	var Name = req.body.Name;
	var usn = req.body.usn;
	var scode = req.body.scode;
	var cie = req.body.cie;
	app.use(bodyParser.json());
	req.checkBody('Name','EmptyName').isAlpha().notEmpty();
	req.checkBody('cie','Not a type').isInt().notEmpty();
	var errors = req.validationErrors();
	if(errors){
		res.send(errors);
	}
	else{
		console.log(Name);
		res.end(JSON.stringify(req.body.Name));
	}
}) 

var server = app.listen(5000, function () {  
var host = server.address().address  
  var port = server.address().port  
console.log("Example app listening at http://%s:%s", host, port)  
})  

