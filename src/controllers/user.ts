import { RequestHandler } from 'express';
import { handleHttp } from '../utils';
import {
  deleteUserServ,
  getUserServ,
  insertUserServ,
  updateUserServ,
} from '../services';
import { User } from '../interfaces';

export const postUserCtrl: RequestHandler = async (req, res) => {
  try {
    const userToCreate: User = req.body as {
      email: string;
      password: string;
      name: string;
    };
    const resp = await insertUserServ(userToCreate);
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERR_POST_USER');
  }
};

export const getUsersCtrl: RequestHandler = async (__req, res) => {
  try {
    const resp = await getUserServ();
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERR_GET_USERS');
  }
};

export const updateUserCtrl: RequestHandler = async ({ params, body }, res) => {
  try {
    const id = (params as { id: string }).id;
    const userData = body as User;
    const resp = await updateUserServ(id, userData);
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERR_PUT_USER');
  }
};

export const deleteUserCtrl: RequestHandler = async ({ params }, res) => {
  try {
    const id = (params as { id: string }).id;
    const resp = await deleteUserServ(id);
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERR_DELETE_USER');
  }
};
