"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePostTask = void 0;
const express_validator_1 = require("express-validator");
const helpers_1 = require("../helpers");
exports.validatePostTask = [
    (0, express_validator_1.check)('userId').exists().notEmpty(),
    (0, express_validator_1.check)('description').exists().notEmpty(),
    (req, res, next) => {
        (0, helpers_1.validateResult)(req, res, next);
    },
];
