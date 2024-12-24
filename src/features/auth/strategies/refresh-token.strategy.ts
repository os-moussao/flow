import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import config from '../../../config';
import { refreshTokenRepository } from '../../../db/repositories';

passport.use(
  'refresh-token',
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.auth.accessTokenSecret,
    },
    async (payload, done) => {
      const userId: number = payload.sub;
      const id = payload.jti;

      if (!userId || !id) return done('unauthorized', false);

      const token = await refreshTokenRepository.findOneBy({ id, userId });

      if (!token) return done('unauthorized', false);

      done(null, { id: userId });
    },
  ),
);
