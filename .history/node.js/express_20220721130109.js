const express =require('express')
const app = express()

app.get('/url', (req, res) =>{
    console.log(req.query)
    res.send(req.query)
})
app.post('/url', (req, res) =>{
    res.send('请求成功')
})
app.listen(80,()=>{
    console.log('Server running at http://127.0.0.1')
})
app.get('/url/:id', (req, res) =>{
    
})