const env = require("dotenv").config({
  path: ".env.local",
});

const autoprefixer = require("autoprefixer");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
// const AntdScssThemePlugin = require("antd-scss-theme-plugin");

module.exports = {
  mode: "development",
  entry: [
    // '@babel/polyfill',
    "./src/index.tsx",
  ],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: process.env.PUBLIC_URL,
  },
  devtool: "cheap-module-eval-source-map",
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
              outputPath: "fonts/",
              publicPath: "../",
            },
          },
        ],
      },
      {
        test: /(pdfkit|linebreak|fontkit|unicode|brotli|png-js).*\.js$/,
        loader: "transform-loader?brfs",
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
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
          // AntdScssThemePlugin.themify("less-loader"),
        ],
      },
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
      {
        from: "./src/assets/fonts/proxima/*",
        to: "fonts",
        flatten: true,
      },
      {
        from: "./src/assets",
        to: "assets",
      },
      // {
      //   from: "./src/images/favicon.ico",
      //   flatten: true,
      // },
      {
        from: "src/assets/root",
        to: "./",
      },
    ]),
    new webpack.EnvironmentPlugin(
      Object.assign(
        {
          BUILD_TARGET: "client",
          NODE_ENV: "dev",
        },
        env.parsed
      )
    ),
    new HtmlWebpackHarddiskPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "template/index.html",
      // favicon: "./src/images/favicon.ico",
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new AntdScssThemePlugin("./src/scss/_theme.Ant.scss"),
  ],
  devServer: {
    contentBase: path.join(__dirname, "public"),
    https: false,
    port: 3000,
    host: "localhost",
    hot: true,
    inline: true,
    open: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
