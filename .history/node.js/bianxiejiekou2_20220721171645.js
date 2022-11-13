const express = require('express')
const router = require('router')

router.get('/gte',(req,res)=>{
    const query = req.query
    res.send({
        status:0,
        mag:'get请求成功'
    })
})


module.exports =router