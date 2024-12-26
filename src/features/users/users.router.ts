import { Router } from 'express';
import { userRepository } from '../../db/repositories';
import { authenticate } from '../auth/middlewares/auth.middleware';

const usersRouter = Router();

usersRouter.get('/', authenticate, async (req, res) => {
  res.json({ users: await userRepository.find({ relations: ['job'] }) });
});

usersRouter.get('/me', authenticate, async (req, res) => {
  const user = await userRepository.findOne({
    where: { id: req.user.id },
    relations: ['job'],
  });
  res.json(user);
});

export default usersRouter;
