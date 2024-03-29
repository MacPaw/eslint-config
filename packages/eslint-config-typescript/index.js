module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    '@macpaw/eslint-config-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-use-before-define': [2, { 'functions': false }],
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/member-delimiter-style': [2, {
      'multiline': {
        'delimiter': 'semi',
        'requireLast': true
      },
      'singleline': {
        'delimiter': 'semi',
        'requireLast': false
      }
    }],
    // https://github.com/typescript-eslint/typescript-eslint/issues/2540#issuecomment-692866111
    'import/no-unresolved': 0,
    'no-use-before-define': 0,
    // Must be off to make "@typescript-eslint/no-useless-constructor" rule work properly
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": 2,
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/no-shadow": 2,
  },
};
