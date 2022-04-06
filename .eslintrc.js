module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['import', 'react', 'react-hooks', 'prettier', 'jsx-a11y', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 2,
    'import/no-anonymous-default-export': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],

    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },

  overrides: [
    {
      files: ['**/*.ts?(x)', '**/*.css', '**/*.scss', '**/*.html'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
        singleQuote: true,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      [require.resolve('eslint-import-resolver-node')]: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      [require.resolve('eslint-import-resolver-typescript')]: {
        alwaysTryTypes: true,
      },
    },
  },
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: [
    'node_modules',
    'build',
    'dist',
    '.next',
    '.vscode',
    '.husky',
    '.git',
    '.lintstagedrc.js',
    '**/*.d.ts',
    'node_modules',
  ],
};
