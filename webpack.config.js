const path =  require('path');
const {InjectManifest} = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './service-worker-src.js',
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'sw.js'
  },
  plugins: [
    new InjectManifest({
      swSrc: './service-worker-src.js',
      swDest: './sw.js',
      // Any other config if needed.
    }),
  ],
};