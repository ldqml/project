const exports = require('exports');
const app = express();
const path = require('path');
const router = require(path.join(__dirname, './bianxiejiekou2'))

app.use('/url',router)


app.listen(80,()=>{
    console.log('http://127.0.0.1')
})