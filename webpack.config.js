const path = require("path");
const PugPlugin = require("pug-plugin");

module.exports = {
  entry: {
    index: "./src/index.pug",
  },
  output: {
    path: path.join(__dirname, "dist/"),
    publicPath: "/",
    filename: "assets/js/[name].[contenthash:8].js",
  },
  plugins: [
    new PugPlugin({
      pretty: true,
      css: {
        filename: "assets/css/[name].[contenthash:8].css",
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ["css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|ico|svg)/,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name].[hash:8][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext][query]",
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    watchFiles: {
      paths: ["src/**/*.*"],
      options: {
        usePolling: true,
      },
    },
  },
  stats: "errors-only",
};
