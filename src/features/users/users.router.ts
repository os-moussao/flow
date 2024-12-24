import { Router } from 'express';
import { userRepository } from '../../db/repositories';
import { authenticate } from '../auth/middlewares/auth.middleware';

const usersRouter = Router();

usersRouter.get('/', authenticate, async (req, res) => {
  res.json({ users: await userRepository.find() });
});

usersRouter.get('/me', authenticate, async (req, res) => {
  res.json(req.user);
});

export default usersRouter;
