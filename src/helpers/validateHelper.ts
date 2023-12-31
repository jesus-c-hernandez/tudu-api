import { RequestHandler } from 'express';
import { validationResult } from 'express-validator';

export const validateResult: RequestHandler = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(403).send({ error });
  }
};
