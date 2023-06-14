import { NextFunction, Request, Response } from 'express';
import { check } from 'express-validator';
import { validateResult } from '../helpers';

export const validatePostTask = [
  check('userId').exists().notEmpty(),
  check('description').exists().notEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];
