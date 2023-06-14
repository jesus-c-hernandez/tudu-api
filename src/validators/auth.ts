import { check } from 'express-validator';
import { validateResult } from '../helpers';
import { NextFunction, Request, Response } from 'express';

export const validateRegister = [
  check('email').exists().notEmpty().isEmail(),
  check('password').exists().notEmpty(),
  check('name').exists().notEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];

export const validateLogin = [
  check('email').exists().notEmpty().isEmail(),
  check('password').exists().notEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];
