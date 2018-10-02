const express=require('express');
const router=express.Router();
const Users=require('../Models/Users');
var token;
const jwt=require('jsonwebtoken');
process.env.SECRET_KEY = "devesh";

router.post('/register',(req,res,next)=>{
 var appData = {
 "error": 1,
 "data": ""
 };
 Users.newUser(req.body,function(err,rows){
 	if(err){
			appData.error=1;
			appData.data="Registration failed"
			res.json({appData,err})
		}else{
			appData.error=0;
			appData.data="Registration success"
			res.json({appData});
		}

 })
})
router.post('/login',(req,res,next)=>{
	var appData = {};
	var email=req.body.email;
    var password=req.body.password;
	Users.Login(req.body,function(err,rows){
	  	if(err){
			res.send(err);
		}
		else{
		    if (rows.length > 0) {
              if (rows[0].password == password) {
              	 token = jwt.sign({email}, process.env.SECRET_KEY);
                 appData.error = 0;
                 appData["token"] = token;
                 res.status(200).json(appData);
              }
              else{
              	appData.error = 1;
                appData["data"] = "Email and Password does not match";
                res.status(204).json(appData);
               }
          }
          else{
             appData.error = 1;
             appData["data"] = "Email does not exists!";
             res.status(201).json(appData);
          }
         // res.send(rows);
		}

	})
})
router.use(function(req, res, next) {
    var token = req.body.token || req.headers['token'];
    var appData = {};
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, function(err) {
            if (err) {
                appData["error"] = 1;
                appData["data"] = "Token is invalid";
                res.status(500).json(appData);
            } else {
                next();
            }
        });
    } else {
        appData["error"] = 1;
        appData["data"] = "Please send a token";
        res.status(403).json(appData);
    }
});
router.get('/getUsers',(req,res,next)=>{
	Users.getUsers(function(err,rows){
		if(err){
			res.json(err)
		}else{
			res.json(rows)
		}
	})
})

module.exports=router;