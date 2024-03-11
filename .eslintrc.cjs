module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  // 标明eslint使用的解析器，如果是普通的es5代码，解析器为Espree
  plugins: ['react-refresh'],
  parserOptions: {
    ecmaVersion: 'lastest',
    sourceType: 'module'
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
