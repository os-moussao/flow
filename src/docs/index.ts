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
          job: { $ref: '#/components/schemas/Job' },
          createdAt: { type: 'string' },
          deletedAt: { type: 'string' },
        },
      },
      Job: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          title: { type: 'string' },
          description: { type: 'string' },
          permissions: {
            type: 'array',
            items: { $ref: '#/components/schemas/Permission' },
          },
          deletedAt: { type: 'string' },
        },
      },
      Permission: {
        type: 'string',
        enum: ['READ', 'WRITE'],
      },
    },
  },
};

export default openApiDocs;
