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
exports.deleteUserServ = exports.updateUserServ = exports.getUserServ = exports.insertUserServ = void 0;
const models_1 = require("../models");
const utils_1 = require("../utils");
const insertUserServ = ({ email, name, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const checkIs = yield models_1.UserModel.findOne({ email: email });
    if (checkIs)
        return { msg: 'USER_ALREADY_EXISTS' };
    const passwordHash = yield (0, utils_1.encrypt)(password);
    const respInsert = yield models_1.UserModel.create({
        email,
        name,
        password: passwordHash,
    });
    return respInsert;
});
exports.insertUserServ = insertUserServ;
const getUserServ = () => __awaiter(void 0, void 0, void 0, function* () {
    const respGet = yield models_1.UserModel.find({});
    return respGet;
});
exports.getUserServ = getUserServ;
const updateUserServ = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.UserModel.findById({ _id: id });
    if (!user) {
        throw new Error('User not found!');
    }
    const respUpdate = yield models_1.UserModel.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return respUpdate;
});
exports.updateUserServ = updateUserServ;
const deleteUserServ = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.UserModel.findById({ _id: id });
    if (!user) {
        throw new Error('User not found!');
    }
    const respDelete = yield models_1.UserModel.deleteOne({ _id: id });
    return respDelete;
});
exports.deleteUserServ = deleteUserServ;
