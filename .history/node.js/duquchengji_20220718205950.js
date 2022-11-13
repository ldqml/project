const fs=require('fs')
fs.readFile('duquchen.js', 'utf8',function(err,dataStr){
    if(err){
        return console.log('文件读取失败'+err.message)
    }
    const olddata = dataStr.split(' ')
    var newdata = []
})