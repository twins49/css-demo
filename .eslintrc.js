module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "@typescript-eslint/explicit-module-boundary-types": "off",
    semi: [2, 'never'],
    'no-plusplus': 'off',
    'class-methods-use-this': 'off',
    'no-unused-expressions': 0,
    'no-shadow': 'off',
    camelcase: 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'prefer-destructuring': [
      'error',
      {
        object: false,
        array: false,
      },
    ],
    'func-names': 0,
    'no-restricted-syntax': 'off',
    'global-require': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
