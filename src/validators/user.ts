import { NextFunction, Request, Response } from 'express';
import { check } from 'express-validator';
import { validateResult } from '../helpers';

export const validatePostUser = [
  check('email').exists().notEmpty().isEmail(),
  check('password').exists().notEmpty(),
  check('name').exists().notEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];
