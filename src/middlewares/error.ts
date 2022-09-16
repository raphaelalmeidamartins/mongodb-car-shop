import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { errorCatalog, ErrorTypes } from '../helpers/ErrorCatalog';
import StatusCodes from '../helpers/StatusCodes';

const errorHandler: ErrorRequestHandler = (
  err: Error | ZodError,
  _req,
  res,
  _next,
) => {
  if (err instanceof ZodError) {
    return res.status(StatusCodes.BadRequest).json({ message: err.issues });
  }

  const mappedError = errorCatalog[err.message as keyof typeof ErrorTypes];
  if (mappedError) {
    const { httpStatus, message } = mappedError;
    return res.status(httpStatus).json({ message });
  }

  console.error(err);
  return res.status(StatusCodes.InternalServerError).json({ message: 'internal error' });
};

export default errorHandler;
