import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from '../config';
import routeNotFoundMiddleware from '../middlewares/route-not-found.middleware';
import errorFilterMiddleware from '../middlewares/error-filter.middleware';
import router from './routes.loader';
import 'express-async-errors';
import '../features/auth/strategies/google.strategy';
import passport from 'passport';

function expressLoader(app: Express) {
  app.use(
    helmet(),
    cors(),
    express.json(),
    express.urlencoded({ extended: false }),
    express.text(),
    passport.initialize(),
  );

  // when using a proxy and wanting to preserve X-forwarder-* headers
  // also req.ip = original client ip, after this config
  // app.enable('trust proxy')

  app.use(config.api.prefix, router);
  // todo: health check endpoints

  // todo: API Documentation middleware
  app.use(routeNotFoundMiddleware);
  app.use(errorFilterMiddleware);
}

export default expressLoader;
