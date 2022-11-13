const express = require('express')
const app = express()
const path = require('path')
const router = require('./bianxiejiekou2')

app.use(express.urlencoded({ extended: false }))
app.use('/api',router)


app.listen(80,()=>{
    console.log('http://127.0.0.1')
})