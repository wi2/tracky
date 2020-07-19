module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    semi: 0,
    'max-len': 100,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'class-methods-use-this': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
}
