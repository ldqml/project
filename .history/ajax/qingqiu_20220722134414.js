const express = require('express');
const app = express();
const cors= require('cors');

app.get('/get',(req,res)=>{
    res.send(req.query)
})

app.listen(80,(req,res)=>{
    console.log('listening on port 8080')
})