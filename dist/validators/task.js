"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDeleteTask = exports.validatePutTask = exports.validatePostTask = void 0;
const express_validator_1 = require("express-validator");
const helpers_1 = require("../helpers");
exports.validatePostTask = [
    (0, express_validator_1.check)('userId').exists().notEmpty(),
    (0, express_validator_1.check)('description').exists().notEmpty(),
    (req, res, next) => {
        (0, helpers_1.validateResult)(req, res, next);
    },
];
exports.validatePutTask = [
    (0, express_validator_1.check)('id').exists().notEmpty(),
    (0, express_validator_1.check)('userId').exists().notEmpty(),
    (0, express_validator_1.check)('description').exists().notEmpty(),
    (0, express_validator_1.check)('state')
        .exists()
        .notEmpty()
        .custom((value) => {
        return value === 'incomplete' || value === 'complete';
    }),
    (req, res, next) => {
        (0, helpers_1.validateResult)(req, res, next);
    },
];
exports.validateDeleteTask = [
    (0, express_validator_1.check)('id').exists().notEmpty(),
    (req, res, next) => {
        (0, helpers_1.validateResult)(req, res, next);
    },
];
