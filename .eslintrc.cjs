module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      extends: 'love',
      rules: {
        '@typescript-eslint/space-before-function-paren': 'off'
      }
    }
  ]
}
