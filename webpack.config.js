const path = require("path");
const PugPlugin = require("pug-plugin");

module.exports = {
  mode: "development",

  entry: {
    index: "./src/index.pug",
  },

  output: {
    path: path.join(__dirname, "dist/"),
    publicPath: "/",
  },

  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },

  plugins: [
    new PugPlugin({
      pretty: true,
      js: {
        filename: "assets/js/[name].[contenthash:8].js",
      },
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
    static: path.join(__dirname, "dist"),
    hot: true,
  },
};
