import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import config from '../../../config';
import { userRepository } from '../../../db/repositories';
import { RequestHandler } from 'express';
import { User } from '../../../models/user.entity';

passport.use(
  'access-token',
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.auth.accessTokenSecret,
    },
    async (payload, done) => {
      const userId: number = payload.sub;
      const user = await userRepository.findOneBy({ id: userId });
      if (!user) return done('invalid credentials', false);
      done(null, user);
    },
  ),
);
