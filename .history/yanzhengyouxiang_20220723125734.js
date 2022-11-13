const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'ajax')));

app.get('/EmailAdress', (req, res) => {
	const email = req.query.email;
	if (email == 'sb@163.com') {
		res.status(400).send({message: '邮箱地址已被注册'})
	} else {
		res.send({message: '邮箱地址可用'})
	}
});

app.listen(80,()=>{
    console.log('Server running at http://127.0.0.1:80')
})
