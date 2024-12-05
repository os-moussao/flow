import { config } from 'dotenv';

config();

export const envConfig = {
  nodeEnv: process.env.NODE_ENV,
  appPort: process.env.PORT ?? 3000,
};
