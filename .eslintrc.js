module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "no-unused-expressions": 0,
    "chai-friendly/no-unused-expressions": 2
  },
  env: {
    mocha: true
  },
  plugins: ["chai-friendly"]
};
