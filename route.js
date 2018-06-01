var express = require('express'); 
var bodyParser = require('body-parser'); 
var app = express();
var MongoClient = require('mongodb').MongoClient;
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// Connect to the db
MongoClient.connect("mongodb://127.0.0.1/studdb", function(err, db) {
if(!err){
	console.log("We are connected");
	app.use(express.static('public')); //making public directory as static directory  
	app.use(bodyParser.json());
	app.get('/', function (req, res) {  
   console.log("Got a GET request for the homepage");  
//   res.send('<h1>Welcome to MSRIT</h1>');  
res.sendFile( __dirname + "/" + "index.html" );
})
	app.get('/insert.html', function (req, res) {
    		res.sendFile( __dirname + "/" + "insert.html" );
	})
/* to access the posted data from client using request body (POST) or request params(GET) */
app.get('/process_get', function (req, res) { 
// Submit to the DB
  var newEmp = req.query;
	var Name = req.query['Name'];
    var usn = req.query['usn'];
var scode = req.query['scode'];
    var cie = req.query['cie'];
var cie1 = cie.parseInt
	db.collection('student').insert({Name:Name,usn:usn,scode:scode,cie:cie,cie1:cie1});	
    console.log("Sent data are (GET): Name :"+Name+" and USN :"+usn);
  	res.end("Employee Inserted-->"+JSON.stringify(newEmp));
}) 
app.get('/display', function (req, res) { 

db.collection('student').find({cie:{$gt:25}}).toArray(
 		function(err , i){
        if (err) return console.log(err)
        res.render('disp.ejs',{studs: i})  
     })
//---------------------// sort({empid:-1}) for descending order -----------//
}) 
var server = app.listen(5000, function () {  
var host = server.address().address  
  var port = server.address().port  
console.log("Example app listening at http://%s:%s", host, port)  
})  
}
else
{   db.close();  }
  
});

