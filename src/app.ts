// 引用express
import express from 'express';
import bodyParser from "body-parser";

// 引入路由
import { api, vpn, img, index } from "./router"

const hostname = '127.0.0.1';

// 接收运行时传递的第一个参数
const port = process.argv[2] || 3000;
// const port = 3000;

// 创建app 
const app = express();

app.use(bodyParser.json());


// 配置程序根目录
app.use(express.static(__dirname + '/public'));


app.use(api())
    .use(vpn())
    .use(img())
    .use(index());


// 处理错误
process.on('uncaughtException', function (err) {
    //打印出错误
    console.log(err);
    //打印出错误的调用栈方便调试
    console.log(err.stack);
});


// 监听3000端口
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`服务器已经在 http://${hostname}:${port}/ 运行`);
    }
})
