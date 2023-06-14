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
exports.registerUser = exports.loginUser = void 0;
const models_1 = require("../models");
const utils_1 = require("../utils");
const utils_2 = require("../utils");
const loginUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.UserModel.findOne({ email: email });
    if (!user)
        return { msg: 'USER_NOT_FOUND' };
    const passwordHash = user.password;
    const isCorrect = yield (0, utils_1.verify)(password, passwordHash);
    if (!isCorrect)
        return 'PASSWORD_INCORRECT';
    const token = (0, utils_2.generateToken)(user.email);
    return { user: { email: user.email, name: user.name, id: user.id }, token };
});
exports.loginUser = loginUser;
const registerUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userExists = yield models_1.UserModel.findOne({ email: user.email });
    if (userExists) {
        return 'USER_ALREADY_EXISTS';
    }
    const { name, email, _id } = yield models_1.UserModel.create(user);
    const token = (0, utils_2.generateToken)(user.email);
    return { user: { email, name, id: _id }, token };
});
exports.registerUser = registerUser;
