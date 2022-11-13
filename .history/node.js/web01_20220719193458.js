const http = require('http')
const server =http.createServer()
server.on('request',(req,res)=>{
    console.log('Someone visit our webserver.')
})
server.listen(80,function(){
    console.log('Server running at http://127.0.0.1:80')
})