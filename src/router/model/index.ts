
// 创建路由
import { Router } from 'express';
const router = Router();

// 首页
router.get('/', function (req: any, res: any) {
    // json显示数据
    res.json('欢迎来到小莫都不知道干嘛用的站!!');
});




// script
router.get("/script", function (req, res) {
    // 返回403
    res.sendStatus(403, '403 Forbidden');
});



// 默认暴露
export default () => router;