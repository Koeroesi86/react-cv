import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
import airbnb from 'eslint-config-airbnb';

export default defineConfig(
  js.configs.recommended,
  tseslint.configs.recommended,
  prettier,
  // airbnb,
  {
    // cache: true,
    // cacheLocation: ".cache/eslint/",
    // extensions: [".js", ".jsx", ".ts", ".tsx"],
    languageOptions: {
      globals: {
        browser: true,
        es2021: true,
        node: true,
        jest: true
      },
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaFeatures: {
          jsx: true,
        },
        ignorePatterns: ['src/fonts/*'],
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: {
      react,
    },
    rules: {
      'import/extensions': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'no-shadow': 'off',
      'react/jsx-props-no-spreading': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      "no-unused-vars": "warn",
      "import/no-extraneous-dependencies": "off",
      // "react/jsx-filename-extension": [1, { "extensions": [
      //   ".js", ".jsx", ".ts", ".tsx"
      // ] }],
      "react/prop-types": "warn",
      "no-console": "warn",
    },
  }
);
