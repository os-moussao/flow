import { OpenAPIV3 } from 'openapi-types';

const authEndpoints: OpenAPIV3.PathsObject = {
  '/api/v1/auth/google': {
    get: {
      description:
        'Redirect to Google OAuth Page. After user logs in, Google will redirect back to `/api/v1/auth/google/callback`',
      tags: ['Auth'],
      responses: {
        200: {
          description: 'Redirect to Google OAuth',
        },
      },
    },
  },
  '/api/v1/auth/google/callback': {
    get: {
      tags: ['Auth'],
      responses: {
        200: {
          description: 'Google OAuth Callback',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/AuthTokens',
              },
            },
          },
        },
      },
    },
  },
  '/api/v1/auth/refresh': {
    get: {
      tags: ['Auth'],
      security: [{ RefreshToken: [] }],
      responses: {
        200: {
          description: 'Refresh Access Token',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/AuthTokens',
              },
            },
          },
        },
      },
    },
  },
};

export default authEndpoints;
