import { ErrorRequestHandler } from 'express';

const errorFilterMiddleware: ErrorRequestHandler = (err, req, res) => {
  console.log(err);
  res.status(400).json({
    errorCode: 'TODO',
  });
};

export default errorFilterMiddleware;
