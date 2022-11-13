const exports = require('exports');
const app = express();
const router = require('bianxiejiekou2');

app.use('/url',router)


app.listen(80,()=>{
    console.log('http://127.0.0.1')
})