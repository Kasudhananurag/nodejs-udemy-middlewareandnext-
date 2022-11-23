const http = require('http');
const express = require('express');

const app = express();

app.use((res, req,next) =>{
    console.log("in middleware1");
    next();
})

app.use((res, req,next) =>{
    console.log("in middleware2");
    //next();
})

const server = http.createServer(app);

server.listen(3000);  20402