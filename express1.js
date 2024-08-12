var express=require('express');
var app=express();
app.get('/draksha',function(req,res){
	res.send("Welcome to express js world tested by draksha");
});
app.listen(3000);