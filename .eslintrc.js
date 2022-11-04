module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/eslint-config-prettier',
    '@vue/eslint-config-typescript',
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
}
