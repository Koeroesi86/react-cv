import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';

export default defineConfig(
  js.configs.recommended,
  tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  prettier,
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
    settings: {
      react: {
        // Explicit version avoids eslint-plugin-react's "detect" path, which calls the
        // now-removed context.getFilename() and crashes under ESLint 10.
        version: '19.2.6',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      'import/extensions': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      'no-shadow': 'off',
      'react/jsx-props-no-spreading': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "import/no-extraneous-dependencies": "off",
      // "react/jsx-filename-extension": [1, { "extensions": [
      //   ".js", ".jsx", ".ts", ".tsx"
      // ] }],
      "react/prop-types": "warn",
      "no-console": "warn",
    },
  }
);
