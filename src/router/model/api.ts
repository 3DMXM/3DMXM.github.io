
// 创建路由
import { Router } from 'express';

import { BingPush } from '../../model/indexNow';


const router = Router();



// 获取IP
router.get("/API/GetMyIP", function (req, res) {
    // 获取IP
    let ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

    // let ip = req.headers['x-forwarded-for'];
    // 从IP中移除::ffff:
    ip = ip.replace(/::ffff:/, '');

    ip = ip.split(",");

    // 返回IP
    res.send(ip[0]);
});

router.post("/api/IndexNow", (req: any, res: any) => {

    let { host, urlList } = req.body;

    let msg = {};

    BingPush(host, urlList).then(() => {
        msg = { code: "00", msg: "提交成功", urlList };
    }).catch(err => {
        console.log(`err: ${err}`);
        msg = { code: "99", msg: `提交失败：${err}` }
    })


})


export default () => router;