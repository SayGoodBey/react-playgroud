module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: 'detect',
    },
    // Tells eslint how to resolve imports
    'import/resolver': {
      typescript: {},
      // "alias": {
      //   "map": [
      //     ["@", "./src"],
      //     ["^\/", "./public"]
      //   ],
      // }
    },
  },
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'import', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "simple-import-sort/imports": ["error",
      {
        "groups": [
          // Packages `react` related packages come first.
          ["^react", "^@?\\w", "^\\u0000"],
          // Internal packages.
          ["^(@|components)(/.*|$)"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.?(css)$"]
        ]
      }
    ],

  },
}
