//backend

const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.end("welcome to root path");
});

app.get('/home',(req,res)=>{
    res.end("welcome to home");
});

app.listen(3000,()=>{
    console.log("server is running");
})