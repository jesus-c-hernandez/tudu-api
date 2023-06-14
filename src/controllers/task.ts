import { RequestHandler } from 'express';
import { handleHttp } from '../utils';
import { Task } from '../interfaces';
import {
  deleteTaskServ,
  getTaskByUserServ,
  postTaskServ,
  putTaskServ,
} from '../services';

export const postTaskCtrl: RequestHandler = async (req, res) => {
  try {
    const taskToCreate: Task = req.body as Task;
    taskToCreate.state = 'incomplete';
    const resp = await postTaskServ(taskToCreate);
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERR_POST_TASK');
  }
};

export const getTaskCtrl: RequestHandler = async (req, res) => {
  try {
    const userId = (req.params as { userId: string }).userId;
    const resp = await getTaskByUserServ(userId);
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERR_GET_USER_TASK');
  }
};

export const putTaskCtrl: RequestHandler = async ({ params, body }, res) => {
  try {
    const id = (params as { id: string }).id;
    const userData = body as Task;
    const resp = await putTaskServ(id, userData);
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERR_PUT_TASK');
  }
};

export const deleteTaskCtrl: RequestHandler = async ({ params }, res) => {
  try {
    const id = (params as { id: string }).id;
    const resp = await deleteTaskServ(id);
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERR_DELETE_TASK');
  }
};
