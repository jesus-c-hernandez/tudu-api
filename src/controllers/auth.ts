import { RequestHandler } from 'express';
import { handleHttp } from '../utils';
import { Auth, User } from '../interfaces';
import { loginUser, registerUser } from '../services';

export const login: RequestHandler = async (req, res) => {
  try {
    const credentials = req.body as Auth;
    const resp = await loginUser(credentials);
    if (resp === 'PASSWORD_INCORRECT') {
      res.status(403).send({ msg: 'PASSWORD_INCORRECT' });
    } else {
      res.send(resp);
    }
  } catch (error) {
    handleHttp(res, 'ERR_LOGIN');
  }
};

export const register: RequestHandler = async (req, res) => {
  try {
    const userToRegister: User = req.body as {
      email: string;
      password: string;
      name: string;
    };
    const resp = await registerUser(userToRegister);
    res.send(resp);
  } catch (error) {
    handleHttp(res, 'ERR_REGISTER');
  }
};
