"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 创建路由
const express_1 = require("express");
const router = (0, express_1.Router)();
// 首页
router.get('/', function (req, res) {
    // json显示数据
    res.json('欢迎来到小莫都不知道干嘛用的站!!');
});
// script
router.get("/script", function (req, res) {
    // 返回403
    res.sendStatus(403, '403 Forbidden');
});
// 默认暴露
exports.default = () => router;
