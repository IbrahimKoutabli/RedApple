const env = require("dotenv").config({ path: ".env.prod" });

const autoprefixer = require("autoprefixer");
const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AntdScssThemePlugin = require("antd-scss-theme-plugin");

module.exports = {
  mode: "production",
  entry: ["./src/index.tsx"],
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: process.env.PUBLIC_URL,
    filename: "static/js/[name].[chunkhash:8].js",
    chunkFilename: "static/js/[name].[chunkhash:8].chunk.js",
  },
  resolve: {
    alias: {
      Actions: path.resolve(__dirname, "src/redux/actions"),
      Components: path.resolve(__dirname, "src/components"),
      Constants: path.resolve(__dirname, "src/constants"),
      Containers: path.resolve(__dirname, "src/containers"),
      Pages: path.resolve(__dirname, "src/pages"),
      Providers: path.resolve(__dirname, "src/providers"),
      Interfaces: path.resolve(__dirname, "src/interfaces"),
      Utils: path.resolve(__dirname, "src/utils"),
      Translations: path.resolve(__dirname, "src/translations"),
      Types: path.resolve(__dirname, "src/types/"),
      Connection: path.resolve(__dirname, "src/connection"),
      Schemas: path.resolve(__dirname, "src/schemas"),
      Contexts: path.resolve(__dirname, "src/contexts"),
      Reducers: path.resolve(__dirname, "src/reducers"),
      Style: path.resolve(__dirname, "src/style"),
      Query: path.resolve(__dirname, "src/query"),
      I18n: path.resolve(__dirname, "src/i18n"),
      VirtualApp: path.resolve(__dirname, "src/virtual-app"),
      ChatWidget: path.resolve(__dirname, "src/chat-widget"),
      Icons: path.resolve(__dirname, "src/icons"),
      Scss: path.resolve(__dirname, "src/scss"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    modules: ["node_modules"],
  },
  target: "web",
  module: {
    rules: [
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve("url-loader"),
        options: {
          limit: 10000,
          name: "static/media/[name].[hash:8].[ext]",
        },
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "static/fonts/",
            },
          },
        ],
      },
      {
        test: /(pdfkit|linebreak|fontkit|unicode|brotli|png-js).*\.js$/,
        loader: "transform-loader?brfs",
      },
      // {
      //   enforce: "pre",
      //   test: /\.jsx?$/,
      //   loader: "babel-loader",
      //   exclude: /(node_modules|bower_components)/,
      //   options: {
      //     error: true,
      //     snazzy: true,
      //     parser: "babel-eslint",
      //   },
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/env", "@babel/preset-react"],
              plugins: ["@babel/plugin-proposal-class-properties"],
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: process.env.NODE_ENV !== "prod",
            },
          },
          AntdScssThemePlugin.themify("less-loader"),
        ],
      },
      // {
      //   loader: require.resolve("file-loader"),
      //   // Exclude `js` files to keep "css" loader working as it injects
      //   // its runtime that would otherwise be processed through "file" loader.
      //   // Also exclude `html` and `json` extensions so they get processed
      //   // by webpacks internal loaders.
      //   exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
      //   options: {
      //     name: "static/js/[name].[chunkhash:8].chunk.js",
      //   },
      // },
      {
        test: /(\.css|\.scss)$/,
        loaders: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: [
                require("postcss-flexbugs-fixes"),
                autoprefixer({
                  browsers: [
                    ">1%",
                    "last 4 versions",
                    "Firefox ESR",
                    "not ie < 9",
                  ],
                  flexbox: "no-2009",
                }),
              ],
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "./src/assets/fonts/proxima/*", to: "fonts", flatten: true },
      { from: "./src/assets", to: "assets" },
      // { from: "./src/images/favicon.ico", flatten: true },
      { from: "src/assets/root", to: "./" },
    ]),
    // new webpack.ProvidePlugin({
    //   Promise: 'es6-promise',
    //   fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    // }),
    new webpack.EnvironmentPlugin(
      Object.assign(
        {
          VERSION: process.env.VERSION,
          NODE_ENV: "prod",
          BUILD_ENV: process.env.BUILD_ENV,
        },
        env.parsed
      )
    ),
    new HtmlWebpackPlugin({
      inject: true,
      template: "template/index.html",
      filename: "index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    // new ExtractTextPlugin({
    //   filename: "static/css/[name].[contenthash:8].css",
    // }),
    new AntdScssThemePlugin("./src/scss/_theme.Ant.scss"),
  ],
  optimization: {
    minimizer: [new TerserPlugin()],
  },
};
