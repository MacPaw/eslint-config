module.exports = {
  extends: [
    'prettier',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        'singleQuote': false,
        'tabWidth': 2,
        'printWidth': 120,
        'trailingComma': 'all'
      }
    ],
  },
  overrides: [
    {
      files: ['*.test.js', '*.test.jsx', '*.test.ts', '*.test.tsx'],
    },
  ]
};
