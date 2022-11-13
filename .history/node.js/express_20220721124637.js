const express =require('express')
const app = express()

app.get('/url', (req, res) =>{
    res.send({name: 'zs',age:'18'})
})
app.post('/url', (req, res) =>{
    res.send('请求成功')
})
app.listen(80,()=>{
    console.log('Server running at http://127.0.0.1')
})