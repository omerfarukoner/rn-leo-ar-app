module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    '@react-native-community',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',

    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'no-console': 1,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    '@typescript-eslint/no-empty-function': 2,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    'react/display-name': 'off',
    'prettier/prettier': 'error',
    'any non-nullish value': 0,
    'linebreak-style': 0,
    semi: ['error', 'always'],
    'comma-spacing': 'warn',
    'dot-notation': 'warn',
    'react/sort-comp': 1,
    'react/forbid-prop-types': 0,
    'no-restricted-syntax': 0,
    'react/no-array-index-key': 2,
    'react-hooks/rules-of-hooks': 1,
    'react-hooks/exhaustive-deps': 0,
    'react/prop-types': 2,
    'arrow-body-style': [0, 'as-needed'],
    'no-dupe-keys': 2,
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 0,
    'react-native/no-single-element-style-arrays': 2,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    alert: true,
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true,
    __DEV__: true,
  },
};