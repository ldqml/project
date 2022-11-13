const fs=require('fs')
const path=require('path')
const stylereg=/<style>[\s\S]*<\/style>/
const scriptreg=/<script>[s\S\]*<\/script>/
fs.readFile(path.join(__dirname))