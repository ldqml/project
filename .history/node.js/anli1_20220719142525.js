const fs=require('fs')
const path=require('path')
const stylereg=/<style>[\s\S]*<\/style>/
const scriptreg=/<script>[s\S]*<\/script>/
fs.readFile(path.join(__dirname,'../jsgaoji/chaxunshangpin.html'),'utf-8',function(err,data){
    if (err) {
        return console.log('文件读取失败'+err.message)
    }
    newanli(data)
    newanlis(data)
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

    function newanlis(jsal){
        const r2=scriptreg.exec(jsal)
        const newjs=r2[0].replace('<script>','').replace('</script>','')
        fs.writeFile(path.join(__dirname,'anlis1s.js'),newjs,function(err){
            if(err){
                return console.log('文件写入失败'+err.message)
            }
            console.log('写入js样式成功')
        })
    }
}