const fs=require('fs')
const path=require('path')
const stylereg=/<style>[\s\S]*<\/style>/
const scriptreg=/<script>[s\S]*<\/script>/
fs.readFile(path.join(__dirname,'../jsgaoji/chaxunshangpin.html'),'utf8',function(err,data){
    if (err) {
        return console.log('文件读取失败'+err.message)
    }
    newanli(data)
})

function newanli(str){
    const r1=stylereg.exec(str)
    const newcss=r1[0].replace('<style>','').replace('</style>','')
    fs.writeFile(path.join(__dirname,'anli1s.css'),newcss,function(err){
        if(err){
            return console.log('文件写入失败'+err.message)
        }
        console.log('写入css样式文件成功！')
    })
}
