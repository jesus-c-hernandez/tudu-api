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
exports.deleteUserCtrl = exports.updateUserCtrl = exports.getUsersCtrl = exports.postUserCtrl = void 0;
const utils_1 = require("../utils");
const services_1 = require("../services");
const postUserCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userToCreate = req.body;
        const resp = yield (0, services_1.insertUserServ)(userToCreate);
        res.send(resp);
    }
    catch (error) {
        (0, utils_1.handleHttp)(res, 'ERR_POST_USER');
    }
});
exports.postUserCtrl = postUserCtrl;
const getUsersCtrl = (__req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield (0, services_1.getUserServ)();
        res.send(resp);
    }
    catch (error) {
        (0, utils_1.handleHttp)(res, 'ERR_GET_USERS');
    }
});
exports.getUsersCtrl = getUsersCtrl;
const updateUserCtrl = ({ params, body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = params.id;
        const userData = body;
        const resp = yield (0, services_1.updateUserServ)(id, userData);
        res.send(resp);
    }
    catch (error) {
        (0, utils_1.handleHttp)(res, 'ERR_PUT_USER');
    }
});
exports.updateUserCtrl = updateUserCtrl;
const deleteUserCtrl = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = params.id;
        const resp = yield (0, services_1.deleteUserServ)(id);
        res.send(resp);
    }
    catch (error) {
        (0, utils_1.handleHttp)(res, 'ERR_DELETE_USER');
    }
});
exports.deleteUserCtrl = deleteUserCtrl;
