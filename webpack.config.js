const path = require('path');

module.exports = {
  entry: './src/scripts.js',
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'postcss-loader'
      ],
    }]
  }
};
