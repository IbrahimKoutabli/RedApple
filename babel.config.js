module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        debug: false,
        targets: {
          browsers: ["last 2 versions"],
        },
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    [
      "@babel/plugin-transform-react-jsx",
      {
        throwIfNamespace: false,
      },
    ],
    [
      "import",
      {
        libraryName: "antd",
        style: true,
      },
    ],
    ["@babel/plugin-proposal-optional-chaining"],
  ],
  env: {
    test: {
      presets: ["@babel/env", "@babel/preset-react"],
    },
  },
};
