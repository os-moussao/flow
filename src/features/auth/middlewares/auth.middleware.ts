import { RequestHandler } from 'express';
import { User } from '../../../models/user.entity';
import passport from 'passport';

export const passportCb = (req, res, next) => {
  return (err: any, user: User | false) => {
    if (err || user === false) {
      next(new Error('Unauthorized'));
    }
    req.user = user;
    next();
  };
};

export const authenticate: RequestHandler = (req, res, next) => {
  const callback = passportCb(req, res, next);
  return passport.authenticate('access-token', { session: false }, callback)(
    req,
    res,
    next,
  );
};
