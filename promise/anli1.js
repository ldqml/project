const fs = require('fs');
const path = require('path');
let p = new Promise((resolve, reject) =>{
    fs.readFile(path.join(__dirname,'anli1.txt'), (err, data) => {
        if(err) reject(err)
        resolve(data)
    })
})
p.then((value) =>{
    console.log(value.toString())
},(reason)=>{
    console.log(reason)
})