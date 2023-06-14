"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const validators_1 = require("../validators");
const router = (0, express_1.Router)();
router.post('/', validators_1.validatePostTask, controllers_1.postTaskCtrl);
router.get('/:userId', controllers_1.getTaskCtrl);
exports.default = { router };
