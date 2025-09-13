import {config as baseConfig } from '../eslint-config/base.js';

export default [
  ...baseConfig,
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'no-console': 'warn',
    },
  },
];