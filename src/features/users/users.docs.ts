import { OpenAPIV3 } from 'openapi-types';

// fix json formatting

const usersEndpoints: OpenAPIV3.PathsObject = {
  '/api/v1/users': {
    get: {
      tags: ['Users'],
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
                      type: 'object',
                      properties: {
                        id: { type: 'number' },
                        email: { type: 'string' },
                        name: { type: 'string' },
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
  },
};

export default usersEndpoints;
