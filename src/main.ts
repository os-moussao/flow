import express from 'express';
import { loader } from './loaders';
import { envConfig } from './config';

async function main() {
  const app = express();

  await loader(app);

  app.listen(envConfig.appPort, () => {
    console.log(
      `\x1b[32mServer running on port ${envConfig.appPort}... \x1b[0m`,
    );
  });
}

main();
