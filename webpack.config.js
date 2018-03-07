const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './Test.js'],
  output: {
    filename: 'test_bundle.js',
    path: path.resolve(__dirname, 'tests')
  },
  devServer: {
    contentBase: './tests'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }
    ]
  }
};
