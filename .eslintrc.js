module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:import/typescript'
  ],
  plugins: [],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'warn',
    'no-prototype-builtins': 0,
    'no-return-await': 1,
    'no-else-return': 1,
    curly: [2, 'all'],
    'no-console': 0,

    'react/no-unused-state': 1,
    'react/state-in-constructor': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],

    'jsx-a11y/no-static-element-interactions': 1,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,

    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,

    'import/no-cycle': 1,
    'import/no-extraneous-dependencies': 0
  }
};
