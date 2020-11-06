const Plugin = require('./plugin')
module.exports = {
  target: 'web',
  entry: './src/index.js',
  plugins: [new Plugin()],
}
