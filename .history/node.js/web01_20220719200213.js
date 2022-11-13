const http = require('http')
const server =http.createServer()
server.on('request',(req,res)=>{
    const str=`请求的地址是 ${req.url},请求的类型为 ${req.method}`
    res.setHeader('Content-Type', 'text/html: charset=utf-8')
    res.end(str)
})
server.listen(80,function(){
    console.log('Server running at http://127.0.0.1')
})