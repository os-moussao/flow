import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import { OpenAPIV3 } from 'openapi-types';
import usersEndpoints from '../features/users/users.docs';
import basicAuth from 'express-basic-auth';
import config from '../config';

const openApiDocs: OpenAPIV3.Document = {
  openapi: '3.0.0',
  info: {
    title: 'Flow Api Documentation',
    version: '1.0.0',
  },
  tags: [{ name: 'Auth' }, { name: 'Users' }],
  paths: {
    ...usersEndpoints,
  },
};

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
