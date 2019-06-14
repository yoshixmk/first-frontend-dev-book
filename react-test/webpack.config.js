const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.css']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/style.css'
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, '/'),
    historyApiFallback: true,
    port: 3000,
  },
};
