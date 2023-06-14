import { Schema, model } from 'mongoose';
import { Task } from '../interfaces';

const TaskSchema = new Schema<Task>(
  {
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
  },
  { timestamps: true, versionKey: false }
);

const TaskModel = model('tasks', TaskSchema);
export { TaskModel };
