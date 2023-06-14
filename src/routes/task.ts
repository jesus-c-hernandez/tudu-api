import { Router } from 'express';
import { getTaskCtrl, postTaskCtrl } from '../controllers';
import { validatePostTask } from '../validators';

const router = Router();

// /task [POST]
router.post('/', validatePostTask, postTaskCtrl);
// /task:userId [GET-By user]
router.get('/:userId', getTaskCtrl);

export default { router };
