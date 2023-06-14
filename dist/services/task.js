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
exports.deleteTaskServ = exports.putTaskServ = exports.getTaskByUserServ = exports.postTaskServ = void 0;
const task_1 = require("../models/task");
const postTaskServ = (task) => __awaiter(void 0, void 0, void 0, function* () {
    const respPost = yield task_1.TaskModel.create(task);
    return respPost;
});
exports.postTaskServ = postTaskServ;
const getTaskByUserServ = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const respGet = yield task_1.TaskModel.find({ userId: userId });
    return respGet;
});
exports.getTaskByUserServ = getTaskByUserServ;
const putTaskServ = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const taskToUpdate = yield task_1.TaskModel.findOne({ _id: id });
    if (!taskToUpdate)
        throw new Error('Task not found!');
    const respPut = yield task_1.TaskModel.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return respPut;
});
exports.putTaskServ = putTaskServ;
const deleteTaskServ = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield task_1.TaskModel.findById({ _id: id });
    if (!task) {
        throw new Error('Task not found!');
    }
    const respDelete = yield task_1.TaskModel.deleteOne({ _id: id });
    return respDelete;
});
exports.deleteTaskServ = deleteTaskServ;
