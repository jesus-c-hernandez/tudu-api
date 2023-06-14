import { Task } from '../interfaces';
import { TaskModel } from '../models/task';

export const postTaskServ = async (task: Task) => {
  const respPost = await TaskModel.create(task);
  return respPost;
};

export const getTaskByUserServ = async (userId: string) => {
  const respGet = await TaskModel.find({ userId: userId });
  return respGet;
};

export const putTaskServ = async (id: string, data: Task) => {
  const taskToUpdate = await TaskModel.findOne({ _id: id });

  if (!taskToUpdate) throw new Error('Task not found!');

  const respPut = await TaskModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return respPut;
};

export const deleteTaskServ = async (id: string) => {
  const task = await TaskModel.findById({ _id: id });

  if (!task) {
    throw new Error('Task not found!');
  }

  const respDelete = await TaskModel.deleteOne({ _id: id });
  return respDelete;
};
