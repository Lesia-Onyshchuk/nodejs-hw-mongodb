import createHttpError from 'http-errors';

export const notFoundHandler = () => {
  createHttpError(404, 'Route not found');
};
