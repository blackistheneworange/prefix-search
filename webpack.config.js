const path = require('path');
const is_development = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './src/index.js',
  mode: is_development ? 'development' : 'production',
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'trie-search.js',
    libraryTarget: 'module'
  },
  module: {
    rules: [
      {
        test: /\.(?:js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: "defaults",
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      }
    ]
  },
  experiments: {
    outputModule: true
  },
};