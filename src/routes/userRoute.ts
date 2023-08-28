import express from 'express';
import controller from '../controllers/users';

const userRouter = express.Router();

userRouter.get('/allUsers', controller.getAllUsers);
userRouter.get('/', controller.getUser);
userRouter.delete('/', controller.deleteUser);
userRouter.post('/', controller.createUser);
userRouter.put('/', controller.updateUser);

export = userRouter;