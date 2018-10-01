const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
//Set Port
const port=process.env.PORT | 3000;
// API file for interacting with MongoDB
// const api = require('/server/routes/api');
var app=express();


// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// API location
// app.use('/', api);
app.get('/',(req,res)=>{
    res.send('api works');
});

//Server start
app.listen(port,(req,res)=>{
    console.log('Server started on port number :'+port)
})