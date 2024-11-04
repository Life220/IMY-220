const path = require("path");

module.exports = {
  entry: "./frontend/src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "frontend", "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              outputPath: "assets/images",
              publicPath: "assets/images",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  devtool: "source-map",
  mode: "development",
};
