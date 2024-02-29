module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // Дополнительные правила, если необходимо
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
  },
};
