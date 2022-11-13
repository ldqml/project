const express = require('express');
const app = express();

app.get('/get',(req,res)=>{
    res.send(req.query)
})

app.listen(8080,(req,res)=>{
    console.log('listening on port 8080')
})