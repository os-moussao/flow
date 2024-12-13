import { ErrorRequestHandler } from 'express';

const errorFilterMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err);
  res.status(400).json({
    errorCode: 'TODO',
    message: err.message,
  });
};

export default errorFilterMiddleware;
