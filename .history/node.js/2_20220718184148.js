const fs=require('fs')
fs.readFile('./txt/2.txt', 'utf8', function(err, dataStr) {
    if(err){
        return close.log('文件读取失败'+err.message)
    }
     close.log('文件读取成功'+dataStr)
})