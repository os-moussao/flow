import { RequestHandler } from 'express';
import passport from 'passport';
import { passportCb } from './auth.middleware';

export const refreshAuthenticate: RequestHandler = (req, res, next) => {
  const callback = passportCb(req, res, next);
  return passport.authenticate('refresh-token', { session: false }, callback)(
    req,
    res,
    next,
  );
};
