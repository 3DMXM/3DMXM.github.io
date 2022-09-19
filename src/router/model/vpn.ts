// 创建路由
// const express = require('express');

import { Router } from 'express';
const router = Router();



// vpn/ssr
router.get("/vpn/ssr", (req, res) => {
    // 设置json响应头
    res.setHeader('Content-Type', 'application/json');

    let data = `ssr://MjAyLjE4Mi4xMDMuMTAzOjExMTE6YXV0aF9zaGExX3Y0OmFlcy0xMjgtY2ZiODpwbGFpbjpaMlJtZG1GelpHSnFhMnMvP29iZnNwYXJhbT0mcmVtYXJrcz01TGljNUxxcyZncm91cD01YkNQNkk2cg
       ssr://MTY4LjYzLjE1MC4xNjc6MTExMTphdXRoX3NoYTFfdjQ6YWVzLTI1Ni1jZmI6cGxhaW46Wm1GelpHaGhjMmhrYW1GeloycHIvP29iZnNwYXJhbT0mcmVtYXJrcz02YWFaNXJpdiZncm91cD01YkNQNkk2cg
       ssr://MC4wLjAuMDo2NjY2OmF1dGhfc2hhMV92NDphZXMtMjU2LWN0cjpwbGFpbjpNREF3TUEvP29iZnNwYXJhbT0mcmVtYXJrcz1QVDA5NklxQzU0SzU2SWVxNVlxbzVwdTA1cGF3UFQwOSZncm91cD01YkNQNkk2cg`;

    // base64_encode加密data
    let base64_encode = Buffer.from(data).toString('base64');

    res.send(base64_encode);
});


// vpn/v2r
router.get("/vpn/v2r", (req, res) => {

    // 设置json响应头
    res.setHeader('Content-Type', 'application/json');

    let data = `vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIuS4nOS6rCIsDQogICJhZGQiOiAiMi52LmFvZS50b3AiLA0KICAicG9ydCI6ICIyMzM2IiwNCiAgImlkIjogImFlYWZjNjM1LTA0MTItNDFjZC05MjBjLTk2ODA4ZDYzY2M0MCIsDQogICJhaWQiOiAiNjMiLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIjIudi5hb2UudG9wIiwNCiAgInBhdGgiOiAiLzkwMGQvIiwNCiAgInRscyI6ICJ0bHMiDQp9`;

    // base64_encode加密data
    let base64_encode = Buffer.from(data).toString('base64');

    res.send(base64_encode);
});


// 默认暴露
export default () => router;