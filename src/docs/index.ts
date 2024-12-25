import { OpenAPIV3 } from 'openapi-types';
import usersEndpoints from '../features/users/users.docs';
import { User } from '../models/user.entity';

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
  components: {
    schemas: {
      ApiError: {
        type: 'object',
        properties: {
          errorCode: { type: 'string' },
        },
      },
      User: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          firstName: { type: 'string' },
          lastName: { type: 'string' },
          email: { type: 'string' },
          googleId: { type: 'string' },
          phone: { type: 'string' },
          isAdmin: { type: 'boolean' },
          jobId: { type: 'number' },
          job: { type: 'object' },
          createdAt: { type: 'string' },
          deletedAt: { type: 'string' },
        },
      },
    },
  },
};

export default openApiDocs;
