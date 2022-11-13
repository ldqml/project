const util = require('util')
const fs = require('fs')
let readfy =util.promisify(fs.readFile)
readfy('').then(value=>{
    console.log(value.toString())
})