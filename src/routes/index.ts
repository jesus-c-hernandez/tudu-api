import { Router } from 'express';
import user from './user';
import auth from './auth';
import task from './task';

const router = Router();

const API_DIR = '/api/v1/';

// AUTH
router.use(`${API_DIR}auth`, auth.router);
// USERS
router.use(`${API_DIR}user`, user.router);
// TASKS
router.use(`${API_DIR}task`, task.router);

export { router };
