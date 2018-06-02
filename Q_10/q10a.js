var express = require("express")
var app = express()
var requestTime = function(req,res,next){
	req.requestTime = Date.now()
	next()
}
app.use(requestTime)
var requestUrl = function(req,res,next){
	req.requestUrl = req.url
	next()
}
app.use(requestUrl)

app.get('/',function(req,res){
	var responseText = "Time<br>"
	responseText += "requested at:"+req.requestTime+"<br>"
	res.send(responseText)
	var responseUrl = "URL<br>"
	responseUrl += "requested url:"+req.requestUrl
	res.send(responseUrl)
})
app.listen(5000)
