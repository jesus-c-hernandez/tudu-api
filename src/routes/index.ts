import { Router } from 'express';
import user from './user';
import auth from './auth';
import task from './task';

const router = Router();

const API_DIR_V1 = '/api/v1/';

// AUTH
router.use(`${API_DIR_V1}auth`, auth.router);
// USERS
router.use(`${API_DIR_V1}user`, user.router);
// TASKS
router.use(`${API_DIR_V1}task`, task.router);

export { router };
