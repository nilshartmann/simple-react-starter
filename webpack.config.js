const webpack = require("webpack");
const Stylish = require("webpack-stylish");

module.exports = {
  entry: ["babel-polyfill", "react-hot-loader/patch", "./src/main.js"],
  output: {
    path: __dirname + "/public/dist/",
    filename: "main.js",
    publicPath: "/dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "public/",
    hot: true,
    stats: "none"
  },
  plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin(), new Stylish()]
};
