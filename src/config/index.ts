import { config as loadEnv } from 'dotenv';

const envFound = loadEnv();

if (envFound.error) {
  console.log(`\x1b[31mFATAL: cannot find .env file \x1b[0m`);
  process.exit(1);
}

const config = {
  nodeEnv: process.env.NODE_ENV,
  appPort: process.env.PORT ?? 3000,
  apiPrefix: '/api',
};

export default config;
