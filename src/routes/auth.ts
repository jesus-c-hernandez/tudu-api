import { Router } from 'express';
import { login, register } from '../controllers';
import { validateLogin, validateRegister } from '../validators';

const router = Router();

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);

export default { router };
