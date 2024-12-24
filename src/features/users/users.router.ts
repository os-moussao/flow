import { Router } from 'express';
import { userRepository } from '../../db/repositories';
import { authenticate } from '../auth/strategies/access-token.strategy';

const usersRouter = Router();

usersRouter.get('/', authenticate, async (req, res) => {
  res.json({ users: await userRepository.find() });
});

usersRouter.get('/me', authenticate, async (req, res) => {
  res.json(req.user);
});

export default usersRouter;
