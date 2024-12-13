import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import config from '../../../config';
import { userRepository } from '../../../db/repositories';

passport.use(
  'google',
  new GoogleStrategy(
    {
      clientID: config.auth.googleClientId,
      clientSecret: config.auth.googleClientSecret,
      callbackURL: `${config.api.prefix}/v1/auth/google/callback`,
      scope: ['email', 'profile'],
    },

    async (_accessToken, _refreshToken, profile, doneCb) => {
      let user = await userRepository.findOneBy({ googleId: profile.id });

      if (!user) {
        /**
         * todo:
         * - admin/manager should approve creation
         * - creation via invitation from admin/manager
         */

        user = await userRepository.save({
          firstName: profile.name?.givenName,
          lastName: profile.name?.middleName
            ? `${profile.name?.middleName} ${profile.name?.familyName ?? ''}`
            : (profile.name?.familyName ?? ''),
          googleId: profile.id,
          email: profile.emails?.[0].value,
        });
      }

      doneCb(null, user);
    },
  ),
);
