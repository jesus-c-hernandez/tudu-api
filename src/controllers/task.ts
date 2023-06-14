import { RequestHandler } from 'express';
import { handleHttp } from '../utils';
import { Task } from '../interfaces';
import { postTaskServ } from '../services';

export const postTaskCtrl: RequestHandler = async (req, res) => {
  try {
    const taskToCreate: Task = req.body as Task;
    const resp = await postTaskServ(taskToCreate);
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERR_POST_TASK');
  }
};
