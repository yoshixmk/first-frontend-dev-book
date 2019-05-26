const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.css']
  },
};
