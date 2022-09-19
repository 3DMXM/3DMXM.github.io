
// 创建路由
import { Router } from 'express';
import path from 'path'
import { createConnection } from 'mysql';

import fs from 'fs'


const router = Router();

const imgList = [

]

// 显示随机图片
router.get("/Img/RandomBackgroundImg", function (req, res) {

    fs.readFile(path.join(__dirname, '../../libs/urls.txt'), 'utf8', (err, data) => {
        if (!err) {
            let imgList = data.split('\n')
            let random = Math.floor(Math.random() * imgList.length);
            let img = imgList[random];

            // 正则 匹配 http://tva1.sinaimg.cn/large/005PVVAugy1gqlahlag6jj31jk118h4k.jpg 中的 005PVVAugy1gqlahlag6jj31jk118h4k
            let reg = /http:\/\/tva1.sinaimg.cn\/large\/([\w\d]*)\.jpg/;
            let result = reg.exec(img);
            let imgId = result ? result[1] : '';

            // res.setHeader('Content-Type', 'image/png');
            res.redirect(302, `http://tva1.sinaimg.cn/large/${imgId}.jpg`);
        } else {
            console.log(err);
            res.redirect(500, '错误');
        }
    })


});

// 默认暴露
export default () => router;
