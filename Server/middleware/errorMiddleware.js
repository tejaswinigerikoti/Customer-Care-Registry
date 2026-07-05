const errorHandler = (err, req, res, next) => {
    // If the error has a status code use it, otherwise default to 500 (Server Error)
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    
    res.status(statusCode).json({
        message: err.message || 'An internal server error occurred',
        // Only show the detailed stack trace if we are in development mode
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

module.exports = { errorHandler };