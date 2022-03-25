module.exports = {
  root: true,
  env: {
    es2021: true,
  },
  extends: [
    'plugin:vue/essential'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/v-bind-style': 'warn',
    'vue/v-on-style': 'warn',
    'vue/no-v-html': 'warn',
    'vue/html-self-closing': ['error', {
      'html': {
        'component': 'always',
        'normal': 'never'
      }
    }],
    'vue/attribute-hyphenation': 'off',
    'vue/html-indent': ['error', 2],
    'vue/max-attributes-per-line': ['warn', {
      'singleline': 3
    }],
    'indent': ['error', 2],
    'no-use-before-define': ['error', { 'functions': false }],
    'vue/multi-word-component-names': 0
  },
  globals: {
    'Crate': 'readonly'
  },
  ignorePatterns: [
    'dist/'
  ]
};
