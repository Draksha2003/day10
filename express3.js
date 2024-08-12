var express=require('express');
var router=express.router();
router.get('/',function(req,res){
	res.send("GET route on things");
});
router.post('/',function(req,res){
	res.send("POST route on things");
});
module.exports=router;
