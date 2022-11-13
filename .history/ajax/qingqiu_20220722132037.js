const express = require('express');
const app = express();

app.get('/get',(req,res)=>{
    res.send(req.query)
})

app.listen(8080)
console.log('listening on port 8080')