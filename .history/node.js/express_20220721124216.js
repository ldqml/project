const express =require('express')
const app = express()

app.get('/url', (req, res) =>{
    res.send({name: 'zs',age:'18'})
})
app.listen(8080,()=>{
    console.log('Server running at http://localhost:8080')
})