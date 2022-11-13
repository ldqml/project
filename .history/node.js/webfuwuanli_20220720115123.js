const fs = require('fs');
const path = require('path');
const http = require('http');
const server =http.createServer()
server.on('request',(req,res)=>{
    const url = req.url
    let fpath =''
    if (url==='/'){
        fpath =path.join(__dirname,'./webfuwuanli/zhengze.html')
    }else{
        fpath =path.join(__dirname,'/webfuwuanli',url)
    }
    fs.watchFile(fpath,function(err,index){
        if (err) return res.end('404 Not Found.')
    })
})