function errorHandler(error, req, res, next) {
  if (res.headersSent) {
    return next(error);
  }

  const statusCode = error.statusCode || 500;
  const response = {
    success: false,
    message: statusCode === 500 ? "Internal server error" : error.message
  };

  if (error.details) {
    response.details = error.details;
  }

  if (statusCode === 500) {
    console.error(error);
  }

  return res.status(statusCode).json(response);
}

module.exports = {
  errorHandler
};
