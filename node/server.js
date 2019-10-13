//backend

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./db');
const FeedbackModel = require('./feedback_schema');

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());

//Allow client to access cross domian or ip-addres
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','content-type,x-access-token');
    res.setHeader('Access-Control-Allow-Credentials','true');
    next();
});


app.get('/',(req,res)=>{
    res.end("welcome to root path");
});

app.get('/home',(req,res)=>{
    res.end("welcome to home");
});

app.post('/api',(req,res)=>{
    const feedback = req.body.feedback;
    const username = req.body.username;

    FeedbackModel.create(req.body,(err,doc)=>{
        if(err) res.json({result: "failed"});

        res.json({result: "success",username: username,feedback: feedback});
    })
    // res.end("feedback: "+feedback + " => User: "+user);
});

app.get('/api',(req,res)=>{
    FeedbackModel.find((err,doc)=>{
        if(err) res.json({result : "failed"})

        res.json({result : "success",data:doc})
    })
});

app.listen(2200,()=>{
    console.log("server is running");
})