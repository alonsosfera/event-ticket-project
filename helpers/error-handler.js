// helpers/error-handler.js
export function handleError(res, statusCode, message, error = null) {
  console.error(message, error)
  res.status(statusCode).json({
    success: false,
    message,
    ...(error && { error: error.message })
  })
}
