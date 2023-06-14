import { Router } from 'express';
import { postTaskCtrl } from '../controllers';

const router = Router();

router.post('/', postTaskCtrl);

export default { router };
