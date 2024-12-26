import { OpenAPIV3 } from 'openapi-types';
import usersEndpoints from '../features/users/users.docs';
import authEndpoints from '../features/auth/auth.docs';

const openApiDocs: OpenAPIV3.Document = {
  openapi: '3.0.0',
  info: {
    title: 'Flow Api Documentation',
    version: '1.0.0',
  },
  tags: [{ name: 'Auth' }, { name: 'Users' }],
  paths: {
    ...usersEndpoints,
    ...authEndpoints,
  },
  components: {
    securitySchemes: {
      AccessToken: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      RefreshToken: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      ApiError: {
        type: 'object',
        properties: {
          errorCode: { type: 'string' },
        },
      },
      AuthTokens: {
        type: 'object',
        properties: {
          accessToken: { type: 'string' },
          accessTokenExpiresIn: { type: 'number', description: 'In Seconds' },
          refreshToken: { type: 'string' },
          refreshTokenExpiresIn: {
            type: 'number',
            description: 'In Seconds',
          },
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
