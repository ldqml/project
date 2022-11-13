const express = require('express')
const app = express()

app.use((req,res,next)=>{
    console.log('我先实现')
    next()
})

app.use((req,res,next)=>{
    console.log('我第二')
    next()
})

app.use((req,res,next)=>{
    const time = Date.now()
    req.starttime =time
    next()
})

app.get('/url',(req,res)=>{
    res.send('nowtime'+req.starttime)
})

app.post('/url',(req,res)=>{
    res.send('nowtime'+req.starttime)
})

app.listen(80,()=>{
    console.log('http://127.0.0.1')
})