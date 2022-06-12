const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { Template } = require("webpack");
const { PassThrough } = require("stream");

module.exports = {
  // Set mode
  mode: "development",

  // Set entry point ie. from where webpack needs to read
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },

  //Set out location
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },

  //Webpack dev server
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },

  // Loaders
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Moja lista książek",
      filename: "index.html",
      template: "src/templates/index.html",
    }),
  ],
};
