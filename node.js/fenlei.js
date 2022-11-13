const express = require('express');
const app = express();

app.use(express.json());
app.get('/', function(req, res,) {
    console.log(req.body)
    res.send('new')
})

app.listen(80,()=>{
    console.log('http://127.0.0.1')
})