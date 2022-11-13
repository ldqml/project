const express = require('express');
const app = express();
const path = require('path');
const cors= require('cors');
const request = require('request');
const formidable = require('formidable');
//const bodyParser = require('body-parser');
//app.use(bodyParser.json())
app.use(cors())

app.use(express.static(path.join(__dirname, 'ajax')));

app.post('/first',(req,res)=>{
    res.send('hello sb')
})

app.get('/get',(req,res)=>{
    res.send(req.query)
})

app.post('/post',(req,res)=>{
    res.send(req.body)
})

app.post('/json',(req,res)=>{
    res.send(req.body)
})

app.get('/EmailAdress', (req, res) => {
	const email = req.query.email;
	if (email == 'sb@163.com') {
		res.status(400).send({message: '邮箱地址已被注册'})
	} else {
		res.send({message: '邮箱地址可用'})
	}
});


app.get('/searc', (req, res) => { 
    var search = req.query.key;
    var arr = ['百度文库解除限制','百度网盘限速通报','百度自动驾驶','百度市值超过2万亿','百度总裁李彦宏出席大会'];
    if (/.*[\u767e\u5ea6]+.*$/.test(search)){
        res.send(arr);
    } else {
        res.send(search);
    }
})

app.post('/formdata',(req,res)=>{
    const form = new formidable.IncomingForm()
    form.parse(req,(err,fields,files)=>{
        res.send(fields)
    })
})

app.post('/opens',(req,res)=>{
    const form = new formidable.IncomingForm()
    form.uploadDir = path.join(__dirname,'ajax','formdatashangcuan')
    form.options.keepExtensions=true
    form.parse(req,(err,fields,files)=>{
       res.send({
        path:files.openname.filepath.split('ajax')[1]
     })
    })
})
app.listen(80,()=>{
    console.log('Server running at http://127.0.0.1:80')
})
