"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 创建路由
const express_1 = require("express");
const indexNow_1 = require("../../model/indexNow");
const router = (0, express_1.Router)();
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
router.post("/api/IndexNow", (req, res) => {
    let { host, urlList } = req.body;
    let msg = {};
    (0, indexNow_1.BingPush)(host, urlList).then(() => {
        msg = { code: "00", msg: "提交成功", urlList };
    }).catch(err => {
        console.log(`err: ${err}`);
        msg = { code: "99", msg: `提交失败：${err}` };
    });
});
exports.default = () => router;
