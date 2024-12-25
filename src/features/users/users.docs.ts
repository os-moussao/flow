import { OpenAPIV3 } from 'openapi-types';

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
};

export default usersEndpoints;
