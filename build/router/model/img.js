"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 创建路由
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const router = (0, express_1.Router)();
const imgList = [];
// 显示随机图片
router.get("/Img/RandomBackgroundImg", function (req, res) {
    fs_1.default.readFile(path_1.default.join(__dirname, '../../libs/urls.txt'), 'utf8', (err, data) => {
        if (!err) {
            let imgList = data.split('\n');
            let random = Math.floor(Math.random() * imgList.length);
            let img = imgList[random];
            // 正则 匹配 http://tva1.sinaimg.cn/large/005PVVAugy1gqlahlag6jj31jk118h4k.jpg 中的 005PVVAugy1gqlahlag6jj31jk118h4k
            let reg = /http:\/\/tva1.sinaimg.cn\/large\/([\w\d]*)\.jpg/;
            let result = reg.exec(img);
            let imgId = result ? result[1] : '';
            // res.setHeader('Content-Type', 'image/png');
            res.redirect(302, `http://tva1.sinaimg.cn/large/${imgId}.jpg`);
        }
        else {
            console.log(err);
            res.redirect(500, '错误');
        }
    });
});
// 默认暴露
exports.default = () => router;
