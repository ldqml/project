const express = require('express')
const app = express()
const path = require('path')
app.use(express.urlencoded({ extended: false }))
const router = require('./bianxiejiekou2')

app.use('/api',router)


app.listen(80,()=>{
    console.log('http://127.0.0.1')
})