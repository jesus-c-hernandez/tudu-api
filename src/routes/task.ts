import { Router } from 'express';
import {
  deleteTaskCtrl,
  getTaskCtrl,
  postTaskCtrl,
  putTaskCtrl,
} from '../controllers';
import {
  validateDeleteTask,
  validatePostTask,
  validatePutTask,
} from '../validators';

const router = Router();

// /task [POST]
router.post('/', validatePostTask, postTaskCtrl);
// /task:userId [GET-By user]
router.get('/:userId', getTaskCtrl);
// /task:id [PUT]
router.put('/:id', validatePutTask, putTaskCtrl);
// /task:id [DELETE]
router.delete('/:id', validateDeleteTask, deleteTaskCtrl);

export default { router };
