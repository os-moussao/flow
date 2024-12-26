import { OpenAPIV3 } from 'openapi-types';

const usersEndpoints: OpenAPIV3.PathsObject = {
  '/api/v1/users': {
    get: {
      tags: ['Users'],
      security: [{ AccessToken: [] }],
      responses: {
        200: {
          description: 'List of users',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  users: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/User',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  '/api/v1/users/me': {
    get: {
      tags: ['Users'],
      security: [{ AccessToken: [] }],
      responses: {
        200: {
          description: 'Logged user',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/User',
              },
            },
          },
        },
      },
    },
  },
};

export default usersEndpoints;
