const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "client/index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  devServer: {
    publicPath: "/build",
    proxy: {
      "/": "http://localhost:3000"
    }
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            preset: ["@babel/preset-env", "css-loader", "sass-loader"]
          },
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }, 
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              publicPath: "build",
            }
          }
        ],
      }
    ]
  }
};