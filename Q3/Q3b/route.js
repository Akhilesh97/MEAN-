var express = require("express")
var app = express()
var mongoclient = require("mongodb").MongoClient
var bodyparser = require("body-parser")
var urlencoded = bodyparser.urlencoded({extended:false})

mongoclient.connect("mongodb://127.0.0.1/Votes",function(err,db){
	if(!err){
		var countp1 = 0
		var countp2 = 0
		var countp3 = 0
		var countp4 = 0
		console.log("Connected")
		app.use(express.static("public"))
		app.use(bodyparser.json())
		db.collection("Party").insert({party:"p1",votes:0})
		db.collection("Party").insert({party:"p2",votes:0})	
		db.collection("Party").insert({party:"p3",votes:0})	
		db.collection("Party").insert({party:"p4",votes:0})		
		app.get("/",function(req,res){
			res.sendFile(__dirname+"/index.html")
		})
		
		app.get("/insert.html",function(req,res){
			res.sendFile(__dirname+"/insert.html")
		})
		
		app.get("/process_get",function(req,res){	
			var vote = req.query['p']
			console.log(vote)
			res.send(vote)
			if(vote == "p1"){
				countp1++;
				console.log(countp1)
				db.collection("Party").updateOne({"party":vote},{$set:{"party":vote,"votes":countp1}})
				res.end("Done")
				
			}
			if(vote == "p2"){
				countp2++;
				console.log(countp1)
				db.collection("Party").updateOne({"party":vote},{$set:{"party":vote,"votes":countp2}})
				res.end("Done")				
			}
			if(vote == "p3"){
				countp3++;
				console.log(countp1)
				db.collection("Party").updateOne({"party":vote},{$set:{"party":vote,"votes":countp3}})
				res.end("Done")				
			}
			if(vote == "p4"){
				countp4++;
				console.log(countp1)
				db.collection("Party").updateOne({"party":vote},{$set:{"party":vote,"votes":countp4}})
				res.end("Done")				
			}
			
		})
		app.get("/display",function(req,res){
			db.collection("Party").find().toArray(
				function(err,data){
					if(err) console.log(err)
					res.render("disp.ejs",{p_info:data})	
					//res.send(data)
				}
			)
		})
		app.listen(5000,function(){ console.log("Listening at 5000");})
		
	}
	else{
		db.close();
	}
})
