import { Request, Router } from 'express';
import passport from 'passport';
import './strategies/google.strategy';
import { generateAccessToken } from './auth.service';
import { refreshAuthenticate } from './middlewares/refresh-auth.middleware';

const authRouter = Router();

authRouter.get('/google', passport.authenticate('google', { session: false }));

authRouter.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  async (req, res) => {
    const response = await generateAccessToken(req.user.id);
    res.json(response);
  },
);

authRouter.get('/refresh', refreshAuthenticate, async (req: Request, res) => {
  const response = await generateAccessToken(req.user.id);
  res.json(response);
});

export default authRouter;
