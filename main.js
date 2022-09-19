// 引用express
const express = require('express');
const bodyParser = require('body-parser');

const port = process.argv[2] || 3000;

// 创建app 
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
})



// 配置程序根目录
app.use(express.static(__dirname + '/public'));

// 监听端口
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`服务器已经运行`);
    }
})