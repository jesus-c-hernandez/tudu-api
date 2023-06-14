import { Router } from 'express';
import {
  deleteUserCtrl,
  getUsersCtrl,
  postUserCtrl,
  updateUserCtrl,
} from '../controllers';
import { validatePostUser } from '../validators';

const router = Router();

// /user [GET ALL]
router.get('/', getUsersCtrl);
// /user [POST]
router.post('/', validatePostUser, postUserCtrl);
// /user [PUT]
router.put('/:id', updateUserCtrl);
// /user [DELETE]
router.delete('/:id', deleteUserCtrl);

export default { router };
