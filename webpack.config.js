const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html' // Path to your original index.html
    })
  ],
  entry: './src/index.ts', // Your entry point
  module: {
     rules: [
       {
         test: /\.tsx?$/,
         use: 'ts-loader',
         exclude: /node_modules/,
       },
     ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
