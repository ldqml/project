const express = require('express');
const app = express();
app.get('/', function(req, res,) {
    console.log(666)
    res.send('new')
})

app.listen(80,()=>{
    console.log('http://127.0.0.1')
})