"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 引用express
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// 引入路由
const router_1 = require("./router");
const hostname = '127.0.0.1';
// 接收运行时传递的第一个参数
const port = process.argv[2] || 3000;
// const port = 3000;
// 创建app 
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
// 配置程序根目录
app.use(express_1.default.static(__dirname + '/public'));
app.use((0, router_1.api)())
    .use((0, router_1.vpn)())
    .use((0, router_1.img)())
    .use((0, router_1.index)());
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
    }
    else {
        console.log(`服务器已经在 http://${hostname}:${port}/ 运行`);
    }
});
