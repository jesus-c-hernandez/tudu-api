"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePostUser = void 0;
const express_validator_1 = require("express-validator");
const helpers_1 = require("../helpers");
exports.validatePostUser = [
    (0, express_validator_1.check)('email').exists().notEmpty().isEmail(),
    (0, express_validator_1.check)('password').exists().notEmpty(),
    (0, express_validator_1.check)('name').exists().notEmpty(),
    (req, res, next) => {
        (0, helpers_1.validateResult)(req, res, next);
    },
];
