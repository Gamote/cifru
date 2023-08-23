/**
 * Steps to configure ESLint:
 *  1. Set environment
 *   1.1. Add Node.js global variables and Node.js scoping
 *   1.2. Support the ES2022 ES syntax + predefined global variables
 *  2. Set the parser's `sourceType` to `module` to allow imports of code placed in ECMAScript modules
 *  3. Extensions
 *   3.1. Add recommended ESLint rules ["eslint"]
 *   3.2. Add recommended errors and warnings rules for imports ["eslint-plugin-import"]
 *   3.3. Add recommended best practices for JavaScript promises ["eslint-plugin-promise"]
 *   3.4. Add prettier rules. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array. ["prettier", "eslint-plugin-prettier", "eslint-config-prettier"]
 *  4. Add TypeScript configuration just to TypeScript files
 *   4.1. Specify the TS file extensions that should be linted
 *   4.2. Set the parser to TypeScript ["@typescript-eslint/parser"]
 *   4.3. Set the parser options to Linting with Type Information. Docs: https://typescript-eslint.io/docs/linting/typed-linting
 *   4.4. TS Extensions
 *    4.1. Add recommended TypeScript rules ["@typescript-eslint/eslint-plugin"]
 *    4.2. Add TypeScript rules for Linting with Type Information ["@typescript-eslint/eslint-plugin"]
 *  5. Ignore files and folders from linting based on the exclude property in `tsconfig.json`
 *  6. Add specific rules
 */
/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  overrides: [
    {
      files: ['*.ts', '*.d.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
    },
  ],
  rules: {
    /**
     * Define extensions that shouldn't be specified on import
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
     */
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        'd.ts': 'never',
      },
    ],

    /**
     * Define the order of imports
     * https://github.com/un-es/eslint-plugin-i/blob/fork-release/docs/rules/order.md
     */
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],

    /**
     * Force the `type` keyword for type imports
     * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-imports.md
     */
    '@typescript-eslint/consistent-type-imports': 'error',

    // Disable in favor of the errors Typescript provides
    'import/no-unresolved': 0,
  },
  settings: {
    /**
     * This was added in order to fix the following error:
     * `ESLint: Missing file extension for "../../../dummy-data/workspaces" (import/extensions)`
     *
     * The weird thing is that the file is `.ts` file, and it doesn't happen for all files.
     *
     * @see https://github.com/import-js/eslint-plugin-import/issues/1573#issuecomment-1077914910
     */
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
