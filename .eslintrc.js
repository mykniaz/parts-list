// eslint-disable-next-line functional/immutable-data
module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    }
  ],
  plugins: [
    '@typescript-eslint',
    'functional'
  ],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:functional/external-recommended',
    'plugin:functional/recommended',
    'plugin:functional/stylistic'
  ],
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*'],
  rules: {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'max-len': [
      'error',
      {
        'code': 120,
        'ignoreUrls': true,
        'ignoreTrailingComments': true,
        'ignoreRegExpLiterals': true
      }
    ],
    'object-curly-spacing': ['error', 'always'],
    'brace-style': 'error',
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'arrow-spacing': 'error',
    'space-unary-ops': [2, { 'words': true, 'nonwords': false, 'overrides': { 'new': false, '++': true } }],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'no-multiple-empty-lines': [1, { 'max':1, 'maxEOF':0, 'maxBOF':0 }],
    'eol-last': [1, 'always'],
    'functional/no-try-statement': 0,
    'functional/no-return-void': 0,
    'functional/functional-parameters': 0,
    'functional/object-mutation': 0,
    'functional/no-expression-statement': 0,
    'functional/no-conditional-statement': 0,
    'functional/no-mixed-type': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
  }
};
