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
exports.deleteTaskCtrl = exports.putTaskCtrl = exports.getTaskCtrl = exports.postTaskCtrl = void 0;
const utils_1 = require("../utils");
const services_1 = require("../services");
const postTaskCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskToCreate = req.body;
        taskToCreate.state = 'incomplete';
        const resp = yield (0, services_1.postTaskServ)(taskToCreate);
        res.send(resp);
    }
    catch (error) {
        (0, utils_1.handleHttp)(res, 'ERR_POST_TASK');
    }
});
exports.postTaskCtrl = postTaskCtrl;
const getTaskCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const resp = yield (0, services_1.getTaskByUserServ)(userId);
        res.send(resp);
    }
    catch (error) {
        (0, utils_1.handleHttp)(res, 'ERR_GET_USER_TASK');
    }
});
exports.getTaskCtrl = getTaskCtrl;
const putTaskCtrl = ({ params, body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = params.id;
        const userData = body;
        const resp = yield (0, services_1.putTaskServ)(id, userData);
        res.send(resp);
    }
    catch (error) {
        (0, utils_1.handleHttp)(res, 'ERR_PUT_TASK');
    }
});
exports.putTaskCtrl = putTaskCtrl;
const deleteTaskCtrl = ({ params }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = params.id;
        const resp = yield (0, services_1.deleteTaskServ)(id);
        res.send(resp);
    }
    catch (error) {
        (0, utils_1.handleHttp)(res, 'ERR_DELETE_TASK');
    }
});
exports.deleteTaskCtrl = deleteTaskCtrl;
