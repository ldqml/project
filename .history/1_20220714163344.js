const express = require('express');
const app = express();
app.get('/',(request,response)=>{
    response.send('hello world!');
});
app.listen(8000,()=>{
    console.log("服务器已启动，8000端口监听中...");
})