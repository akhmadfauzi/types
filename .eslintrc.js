module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx:true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-unused-vars': "warn",
    'comma-dangle': ['error', 'always-multiline'],
    curly: ['error', 'all'],
    'no-mixed-operators': 'error',
    'no-console': 'off',
    'no-process-exit': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-debugger': 'warn',
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.ts", "*.tsx"],
      excludedFiles: ['serviceWorker.ts'],
      rules: {
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/interface-name-prefix': 'error',
      },

    }
  ]
};
