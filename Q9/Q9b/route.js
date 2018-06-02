var express = require("express")
var app = express()
var bodyparser = require("body-parser")
var urlencodedParser = bodyparser.urlencoded({extended : false})
var mongoclient = require("mongodb").MongoClient

mongoclient.connect("mongodb://127.0.0.1/FinalYear",function(err,db){
	if(!err){
		console.log("Connected successfully")
		app.use(express.static("public"))
		app.use(bodyparser.json())
		app.get("/",function(req,res){
			res.sendFile(__dirname+"/index.html")
		})
		app.get("/insert.html",function(req,res){
			res.sendFile(__dirname+"/insert.html")
		})
		app.get("/process_get",function(req,res){
			var Name = req.query['Name']
			var usn = req.query['usn']
			var company = req.query['c']
			db.collection("Student").insert({Name:Name,USN:usn,Company:company},function(err){
				if(err)
					console.log("Error inserting");
				else{
					console.log("Name"+Name+company+usn);									
					res.end(JSON.stringify(req.query))
				}
			})
		})
		
		app.get("/count",function(req,res){
			db.collection("Student").find({Company:"Infosys"}).toArray(
				function(err,data){
					console.log(data)
					console.log(data.length)
					res.render("disp.ejs",{stud:data});
			})
		})
		
		var server = app.listen(5000,function(){
			console.log("Server listening at 5000")
		})
	}
	else{
	db.close()
	}
})

			
			
