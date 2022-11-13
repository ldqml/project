const express = require('express');
const app = express();
const path = require('path');
const cors= require('cors');
app.use(cors())
app.get('/get',(req,res)=>{
    res.send(req.query)
})

app.listen(80,()=>{
    console.log('Server running at http://127.0.0.1')
})
