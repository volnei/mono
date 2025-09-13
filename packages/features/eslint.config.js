import { config as baseConfig } from '../eslint-config/base.js';
import importPlugin from 'eslint-plugin-import';

/** 
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  ...baseConfig,
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      'import/no-restricted-paths': [
        'warn',
        {
          zones: [
            {
              target: ['./src'],
              from: ['../domain/src'],
              except: ['features'],
              message: "The 'features' package cannot access internal parts of the 'domain' package.",
            },
          ],
        },
      ],
    },
  },
];