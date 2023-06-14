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

export const validatePutTask = [
  check('id').exists().notEmpty(),
  check('userId').exists().notEmpty(),
  check('description').exists().notEmpty(),
  check('state')
    .exists()
    .notEmpty()
    .custom((value) => {
      return value === 'incomplete' || value === 'complete';
    }),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];

export const validateDeleteTask = [
  check('id').exists().notEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    validateResult(req, res, next);
  },
];
