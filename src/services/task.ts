import { Task } from '../interfaces';
import { TaskModel } from '../models/task';

export const postTaskServ = async (task: Task) => {
  const respTask = await TaskModel.create(task);
  return respTask;
};

export const getTaskByUserServ = async (userId: string) => {
  const task = await TaskModel.find({ userId: userId });
  return task;
};
