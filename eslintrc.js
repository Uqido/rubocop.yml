module.exports = {
  extends: 'standard',
  globals: {
    self: false,
    $: false,
    I18n: false,
    Turbolinks: false,
    history: false
  },
  plugins: ['react', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'key-spacing': ['error', { mode: 'minimum' }],
    'no-eval': 'off',
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          VariableDeclarator: true,
          ImportDeclaration: true
        }
      }
    ],
    'no-return-assign': 'off',
    'prettier/prettier': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'space-before-function-paren': ['error', 'never']
  }
}
