"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
const mongoose_1 = require("mongoose");
const TaskSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
}, { timestamps: true, versionKey: false });
const TaskModel = (0, mongoose_1.model)('tasks', TaskSchema);
exports.TaskModel = TaskModel;
