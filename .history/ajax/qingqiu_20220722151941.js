const express = require('express');
const app = express();
const path = require('path');
const cors= require('cors');
app.use(cors())
app.use(express.static(path.join(__dirname, 'ajax')));

app.get('/get',(req,res)=>{
    res.send(req.query)
})

app.listen(80,()=>{
    
})
