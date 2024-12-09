import { Router } from 'express';

const authRouter = Router();

authRouter.get('/login', (req, res) => {
  res.json('login');
});

authRouter.get('/logout', (req, res) => {
  res.json('logout');
});

authRouter.get('/refresh', (req, res) => {
  res.json('refresh');
});

export default authRouter;
