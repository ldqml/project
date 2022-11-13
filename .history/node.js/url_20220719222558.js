const http = require('http')
const server= require('server')
server.on('request',(req,res)=>{
    const url=req.url
    let content ='<h1>404</h1>'
    if(url==='/' || url==='/index.html'){
        content = '<h1>首页</h1>'
    }
})