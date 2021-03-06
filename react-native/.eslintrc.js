module.exports = {
  env: {
    es6: true,
    'react-native/react-native': true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'prettier',
    'react',
    'react-hooks',
    'react-native',
    'simple-import-sort',
  ],
  root: true,
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_[0-9]?' },
    ],
    '@typescript-eslint/no-var-requires': 'off',
    'consistent-return': 'off',
    'global-require': 'off',
    'import/extensions': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'no-await-in-loop': 'off',
    'no-control-regex': 'off',
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'object-curly-newline': [
      'error',
      { ImportDeclaration: { consistent: true } },
    ],
    'prefer-promise-reject-errors': 'off',
    'prettier/prettier': 'error',
    'react/destructuring-assignment': 'off',
    'react/display-name': 'off',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
  },
};
