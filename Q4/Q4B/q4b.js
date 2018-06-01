var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var url_encoded_parser = bodyParser.urlencoded({ extended: false})

var app = express()

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html')
})
app.get('/home.html', function(req, res){
	res.sendFile(__dirname + '/home.html')
})
app.get('/contact.html', function(req, res){
	res.sendFile(__dirname + '/contct.html')
})

app.get('/about.html', function(req, res){
	res.sendFile(__dirname + '/about.html')
})


var server = app.listen(5000, function(){
	var address = server.address().address
	var port = server.address().port
	console.log('The server is running on http://' + address + ':' + port)
})
