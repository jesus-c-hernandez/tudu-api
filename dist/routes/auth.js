"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const validators_1 = require("../validators");
const router = (0, express_1.Router)();
router.post('/register', validators_1.validateRegister, controllers_1.register);
router.post('/login', validators_1.validateLogin, controllers_1.login);
exports.default = { router };
