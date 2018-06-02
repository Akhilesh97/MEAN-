var readline = require('readline-sync');
var num = readline.question("Enter a number")
var sq = num*num
if((num+"").slice(-1) == (sq+"").slice(-1))
	console.log("anamorphic")
else
	console.log("not")
