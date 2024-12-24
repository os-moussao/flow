import { Router } from 'express';
import authRouter from '../features/auth/auth.router';
import usersRouter from '../features/users/users.router';

const router = Router();

router.use('/v1/auth', authRouter);
router.use('/v1/users', usersRouter);

export default router;
