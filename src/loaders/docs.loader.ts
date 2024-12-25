import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import basicAuth from 'express-basic-auth';
import config from '../config';
import openApiDocs from '../docs';

export function loadSwaggerDocs(app: Express) {
  app.use(
    '/api/docs',
    basicAuth({
      challenge: true,
      users: { [config.api.docs.user]: config.api.docs.password },
    }),
    swaggerUi.serve,
    swaggerUi.setup(openApiDocs, {
      customSiteTitle: 'Flow Api Docs',
    }),
  );
}
