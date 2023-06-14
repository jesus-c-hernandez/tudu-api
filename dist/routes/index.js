"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_1 = __importDefault(require("./user"));
const auth_1 = __importDefault(require("./auth"));
const task_1 = __importDefault(require("./task"));
const router = (0, express_1.Router)();
exports.router = router;
const API_DIR = '/api/v1/';
router.use(`${API_DIR}auth`, auth_1.default.router);
router.use(`${API_DIR}user`, user_1.default.router);
router.use(`${API_DIR}task`, task_1.default.router);
