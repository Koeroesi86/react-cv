const path = require("path");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");

const mode = "development";

module.exports = [
  {
    mode,
    entry: {
      node: path.resolve(__dirname, "./src/node.tsx"),
    },
    target: "node",
    devtool: "eval-source-map",
    node: {
      global: true,
      __filename: true,
      __dirname: true,
    },
    cache: {
      type: "filesystem",
      cacheDirectory: path.resolve(__dirname, ".cache/webpack/backend"),
    },
    watchOptions: {
      poll: 1000,
    },
    output: {
      path: path.resolve(__dirname, "./dist/backend"),
      filename: "[name].js",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      plugins: [new TsconfigPathsPlugin()],
    },
    externals: [
      "iconv-lite",
      // '@react-pdf/renderer',
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
  },
];
