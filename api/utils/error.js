export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = this.statusCode;
  error.message = this.message;
  return error;
};
