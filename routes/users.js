import express from 'express';
import { createUser, getUserID, getUsers, patchUser, delUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUserID);

router.delete('/:id', delUser)

router.patch('/:id', patchUser)

export default router;