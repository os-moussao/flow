import jwt from 'jsonwebtoken';
import config from '../../config';

export const generateAccessToken = async (userId: number) => {
  const accessToken = await new Promise((resolve, reject) => {
    jwt.sign(
      { sub: userId },
      config.auth.accessTokenSecret,
      { expiresIn: config.auth.accessTokenDuration },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      },
    );
  });

  return { accessToken, expiresIn: config.auth.accessTokenDuration };
};
