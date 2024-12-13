import { Request, Router } from 'express';
import passport from 'passport';
import './strategies/google.strategy';
import { generateAccessToken } from './auth.service';

const authRouter = Router();

authRouter.get('/google', passport.authenticate('google'));

authRouter.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  async (req, res) => {
    const token = await generateAccessToken(req.user.id);
    res.json(token);
  },
);

export default authRouter;
