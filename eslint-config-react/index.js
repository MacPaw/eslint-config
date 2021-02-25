module.exports = {
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'jsx-a11y/no-autofocus': 0,
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/jsx-max-props-per-line': ['error', { 'maximum': 1, 'when': 'multiline' }],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    "react/jsx-closing-bracket-location": 2,
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-newline': ['error', {
      'multiline': 'consistent',
      'singleline': 'consistent',
    }],
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never',
      'beforeClosing': 'never',
    }],
  },
};
