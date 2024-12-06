import express from 'express';
import loader from './loaders';
import config from './config';

async function main() {
  const app = express();

  await loader(app);

  app.listen(config.appPort, () => {
    console.log(`\x1b[32mServer running on port ${config.appPort}... \x1b[0m`);
  });
}

main();
