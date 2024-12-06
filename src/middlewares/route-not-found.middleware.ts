import { RequestHandler } from 'express';

const routeNotFoundMiddleware: RequestHandler = (req, res) => {
  res.status(404).json({
    errorCode: 'ROUTE_NOT_FOUND',
  });
};

export default routeNotFoundMiddleware;
