const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const user=require('./routes/user')
var app=express();
var port=process.env.PORT | 3000;
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname,'views')));
app.use('/user',user);
// app.use('*',(req,res)=>{
// 	res,sendFile(path.join(__dirname,'views/index.html'))
// })
app.listen(port,()=>{
	console.log('Server run on port no' +port);
});
