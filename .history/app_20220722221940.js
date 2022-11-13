const express = require('express');
const app = express();
const path = require('path');
const cors= require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'ajax')));

app.post('/first',(req,res)=>{
    res.send('hello sb')
})

app.get('/get',(req,res)=>{
    res.send(req.query)
})

app.post('/post',(req,res)=>{
    res.send(req.body)
})

app.post('/json',(req,res)=>{
    res.send(req.body)
})

app.listen(80,()=>{
    console.log('Server running at http://127.0.0.1:80')
})
