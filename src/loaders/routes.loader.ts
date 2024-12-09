import { Router } from 'express';
import authRouter from '../features/auth/auth.router';

const router = Router();

router.use('/v1/auth', authRouter);

export default router;
