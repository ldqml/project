const express = require('express')
const app = express()

app.use((req,res,next)=>{
    const time = new Date()
})


app.listen(80,()=>{
    console.log('http://127.0.0.1')
})