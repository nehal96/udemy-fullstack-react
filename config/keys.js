if (process.env.NODE_ENV === 'production') {
  // In production, return prod keys
  module.exports = require('./prod')
} else {
  // In development, return dev keys
  module.exports = require('./dev')
}
