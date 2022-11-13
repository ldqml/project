const express = require('express');
const app = express();
const cors= require('cors');
app.use(cors())

app.get('/get',(req,res)=>{
    res.send(req.query)
})

app.listen(3000)
    console.log('listening on port 8080')
