import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from '../config';
import routeNotFoundMiddleware from '../middlewares/route-not-found.middleware';
import errorFilterMiddleware from '../middlewares/error-filter.middleware';
import router from './routes.loader';

function expressLoader(app: Express) {
  // todo: health check endpoints

  app.use(
    helmet(),
    cors(),
    express.json(),
    express.urlencoded({ extended: false }),
    express.text(),
  );

  // when using a proxy and wanting to preserve X-forwarder-* headers
  // also req.ip = original client ip, after this config
  // app.enable('trust proxy')

  app.use(config.apiPrefix, router);

  // todo: API Documentation middleware
  app.use(routeNotFoundMiddleware);
  app.use(errorFilterMiddleware);
}

export default expressLoader;
