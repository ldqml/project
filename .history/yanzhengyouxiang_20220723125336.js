const express = require('express');
const app = express();

app.get('/EmailAdress', (req, res) => {
	const email = req.query.email;
	if (email == 'sb@163.com') {
		res.status(400).send({message: '邮箱地址已被注册'})
	} else {
		res.send({message: '邮箱地址可用'})
	}
});