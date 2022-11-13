const express = require('express')
const router =express.Router()
router.get('/url/list', function(req, res){
    res.send('send get chenggong')
})
router.post('/url/end', function(req, res){
    res.send('send post chenggong')
}) 