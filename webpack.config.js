const path = require("path");

module.exports = {
  mode: "production",
  entry: ["./src/js/main.js", "./src/index.html"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              name: "[hash].css",
            },
          },
          "extract-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{ loader: "file-loader", options: { esModule: false } }],
      },
      {
        test: /\.(html)$/,
        use: [
          { loader: "file-loader?name=[name].[ext]" },
          "extract-loader",
          {
            loader: "html-loader",
            options: {
              minimize: true,
              attrs: ["img:src", "link:href"],
            },
          },
        ],
      },
      {
        test: /\.(webmanifest)$/,
        use: [
          {
            loader: "file-loader",
            options: { esModule: false, name: "[name].[ext]" },
          },
        ],
      },
    ],
  },
};
