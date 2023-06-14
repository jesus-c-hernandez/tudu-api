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
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const utils_1 = require("../utils");
const services_1 = require("../services");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const credentials = req.body;
        const resp = yield (0, services_1.loginUser)(credentials);
        if (resp === 'PASSWORD_INCORRECT') {
            res.status(403).send({ msg: 'PASSWORD_INCORRECT' });
        }
        else {
            res.send(resp);
        }
    }
    catch (error) {
        (0, utils_1.handleHttp)(res, 'ERR_LOGIN');
    }
});
exports.login = login;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userToRegister = req.body;
        const resp = yield (0, services_1.registerUser)(userToRegister);
        res.send(resp);
    }
    catch (error) {
        (0, utils_1.handleHttp)(res, 'ERR_REGISTER');
    }
});
exports.register = register;
