const fs = require('fs');
let p = new Promise((resolve, reject) =>{
    fs.readFile("", 'utf8', (err, data) => {
        if(err) reject(err)
        resolve(data)
    })
})
p.then((value) =>{
    console.log(value.toString())
},(reason)=>{
    console.log(reason)
})