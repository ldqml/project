const http = require('http')
const server= require('server')
server.on('request',(req,res)=>{
    const url=req.url
    let content ='<h1>404</h1>'
    if(url==='/' || url==='/index.html'){
        content = '<h1>首页</h1>'
    }else if(url==='/about.html'){
        content = '<h1>关于页面</h1>'
    }
    res.setHeader('Content-Type', 'text/html :charset=utf-8')
})