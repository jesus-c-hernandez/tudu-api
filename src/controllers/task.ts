import { RequestHandler } from 'express';
import { handleHttp } from '../utils';
import { Task } from '../interfaces';
import { getTaskByUserServ, postTaskServ } from '../services';

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
