const fs=require('fs')
fs.readFile('jiuchengji.txt', 'utf8',function(err,dataStr){
    if(err){
        return console.log('文件读取失败'+err.message)
    }
    const olddata = dataStr.split(' ')
    var newdata = []
    olddata.forEach(function(item){
        newdata.push(item.replace("=",":"))
    })
    const newstar=newdata.join('\r\n')
    console.log(newstar)

    fs.writeFile('xinchengji.txt',newdata,function(err){
        if(err){
            return console.log('成绩写入失败'+err.message)
        }
        console.log('成绩写入成功')
    })
})