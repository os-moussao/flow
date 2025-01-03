import { config as loadEnv } from 'dotenv';

const envFound = loadEnv();

if (process.env.NODE_ENV !== 'production' && envFound.error) {
  console.log(`\x1b[31mFATAL: cannot find .env file \x1b[0m`);
  process.exit(1);
}

const config = {
  nodeEnv: process.env.NODE_ENV,
  appPort: process.env.PORT ?? 3000,
  api: {
    baseUrl:
      process.env.SERVER_BASE_URL ??
      `http://localhost:${process.env.PORT ?? 3000}`,
    prefix: '/api',
    docs: {
      user: process.env.API_DOCS_USER,
      password: process.env.API_DOCS_PASSWORD,
    },
  },
  database: {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
  },
  auth: {
    googleClientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    accessTokenDurationSec: +process.env.ACCESS_TOKEN_DURATION_SEC,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    refreshTokenDurationSec: +process.env.REFRESH_TOKEN_DURATION_SEC,
  },
};

function validateEnvConfig(config: object, key = 'config') {
  Object.keys(config).map((property) => {
    const currKey = `${key}.${property}`;
    if (typeof config[property] === 'object') {
      validateEnvConfig(config[property], currKey);
    } else if (config[property] === undefined) {
      console.log(`\x1b[31mMissing environment key: ${currKey} \x1b[0m`);
      process.exit(1);
    }
  });
}

validateEnvConfig(config);

export default config;
