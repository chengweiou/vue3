module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  settings: { // @路径引入的文件也需要校验
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json', '.vue'],
      },
    },
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'never'],
    'no-unused-vars': 'warn',
    // allow debugger during development
    'no-tabs': 0,
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 0, 'maxBOF': 0 }],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "vue/first-attribute-linebreak": ["error", {
      "singleline": "ignore",
      "multiline": "ignore",
    }],
    "vue/multi-word-component-names": 0,
  },
  parserOptions: {
    ecmaVersion: '2021',
  },
  // overrides: [
  //   {
  //     files: [
  //       '**/__tests__/*.{j,t}s?(x)',
  //     ],
  //     env: {
  //       mocha: true,
  //     },
  //   },
  // ],
}
