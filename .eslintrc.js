module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'import'],
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.json'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb-typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    indent: ['off', 2],
    '@typescript-eslint/indent': ['error', 2],
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'react/prop-types': 'off', // Typescript types are enough for most cases
    'no-return-await': 'off',
    'no-console': 'off',
    'no-await-in-loop': 'off',
    'no-nested-ternary': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn', // not error
    'no-else-return': 'off',
    'no-alert': 'off',
    'jsx-a11y/anchor-is-valid': 'off', // Next.JS specific.
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off', // Next.JS specific
    'react/display-name': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
};
