import { Configuration } from "webpack";
import path from "path";

const mode = "development";

const config: Configuration = {
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
  },
  externals: ["iconv-lite"],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

export default config;
