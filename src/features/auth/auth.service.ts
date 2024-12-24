import jwt from 'jsonwebtoken';
import config from '../../config';
import crypto from 'crypto';
import { refreshTokenRepository } from '../../db/repositories';

export const generateAccessToken = async (userId: number) => {
  const accessToken = await new Promise((resolve, reject) => {
    jwt.sign(
      { sub: userId },
      config.auth.accessTokenSecret,
      { expiresIn: config.auth.accessTokenDurationSec },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      },
    );
  });

  const refreshTokenObj = await refreshTokenRepository.save({
    userId,
    expiresAt: new Date(
      Date.now() + config.auth.refreshTokenDurationSec * 1000,
    ),
  });

  const refreshToken = await new Promise((resolve, reject) => {
    jwt.sign(
      { sub: userId, jti: refreshTokenObj.id },
      config.auth.refreshTokenSecret,
      { expiresIn: config.auth.refreshTokenDurationSec },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      },
    );
  });

  return {
    accessToken,
    accessExpiresIn: config.auth.accessTokenDurationSec,
    refreshToken,
    refreshExpiresIn: config.auth.refreshTokenDurationSec,
  };
};
