import { JestConfigWithTsJest, pathsToModuleNameMapper } from "ts-jest";
import path from "path";
const { compilerOptions } = require('./tsconfig.json');

const config: JestConfigWithTsJest  = {
  rootDir: "src",
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  cacheDirectory: path.resolve(__dirname, ".cache/jest/"),
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
};

export default config;
