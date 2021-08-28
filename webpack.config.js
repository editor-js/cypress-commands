const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    commands: './cypress/support/index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
}
