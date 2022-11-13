const util = require('util')
const fs = require('fs')
const path = require('path')
let readfy =util.promisify(fs.readFile)
readfy('path.join(__dirname,'anli1.txt').then(value=>{
    console.log(value.toString())
})