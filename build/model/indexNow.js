"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaiduPush = exports.BingPush = void 0;
const axios_1 = __importDefault(require("axios"));
function BingPush(host, urlList, key = "33ffe7c0ae6c439cb5b41d4bd80393c0") {
    return __awaiter(this, void 0, void 0, function* () {
        let url = "https://www.bing.com/indexnow";
        let data = {
            key: key,
            host: host,
            "keyLocation": `https://${host}/${key}.txt`,
            urlList: urlList
        };
        // console.log(data);
        return axios_1.default.post(url, data, {
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        });
    });
}
exports.BingPush = BingPush;
function BaiduPush(params) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.BaiduPush = BaiduPush;
