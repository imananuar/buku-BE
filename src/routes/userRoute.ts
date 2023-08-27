import express from 'express';
import controller from '../controllers/posts';

const router = express.Router();

router.get('/allUsers', controller.getAllUsers);
router.get('/user', controller.getUser);
router.delete('/user', controller.deleteUser);
router.post('/user', controller.createUser);
router.put('/user', controller.udpateUser);

export = router;