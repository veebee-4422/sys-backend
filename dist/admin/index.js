"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
function adminRoutes() {
    const router = (0, express_1.Router)();
    const controller = new controller_1.default();
    return router;
}
exports.default = adminRoutes;
;
