const express = require('express');
const app = express();
const path = require('path');
const cors= require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json())
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


app.post('/searc', bodyparserPost, (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    //获取客户端搜索框内容
    var search = req.body.searchvalue;
    //arr 实际应该通过服务器查询匹配关键词并返回结果，这里写死几个方便测试
    var arr = ['百度文库解除限制','百度网盘限速通报','百度自动驾驶','百度市值超过2万亿','百度总裁李彦宏出席大会'];
    // 判断搜索框是否输入了“百度”二字
    if (/.*[\u767e\u5ea6]+.*$/.test(search)){
        res.send(arr);
    } else {
        res.send(search);
    }
})

app.listen(80,()=>{
    console.log('Server running at http://127.0.0.1:80')
})
