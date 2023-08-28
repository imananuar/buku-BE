import express from 'express';
import controller from '../controllers/login';

const authRouter = express.Router();

authRouter.post('/login', controller.login);

export = authRouter;