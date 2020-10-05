module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  env: {
    es6: true,
    node: true
  },
  rules: {
    'prettier/prettier': 'error'
  },
  plugins: ['prettier']
}
