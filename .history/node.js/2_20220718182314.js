const fs=require('fs');
fs.readFile('./2.txt', 'utf8', function(err, data) {
    if(err){
        return close.log('文件读取失败'+massge)
    }
});