"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = exports.img = exports.vpn = exports.api = void 0;
const api_1 = __importDefault(require("./model/api"));
exports.api = api_1.default;
const vpn_1 = __importDefault(require("./model/vpn"));
exports.vpn = vpn_1.default;
const img_1 = __importDefault(require("./model/img"));
exports.img = img_1.default;
const model_1 = __importDefault(require("./model"));
exports.index = model_1.default;
