const fs=require('fs')
fs.watchFile('write.txt','我是新写入的文件',function(err){
    if (err){
        return console.log('文件写入失败'+err.message)
    }
    
})