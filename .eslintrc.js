module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended'],
  // parser: '@babel/eslint-parser',
  parserOptions: {
    // parser: '@babel/eslint-parser',
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    ecmaVersion: 2020
  },

  settings: {
    'import/resolver': {},
    react: {
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
      flowVersion: '0.53'
    },
    jest: {
      version: 26
    }
  },
  plugins: ['react', 'import', 'simple-import-sort', 'jest', 'node'],
  rules: {
    // base
    'no-console': 2,
    'react/react-in-jsx-scope': 0,
    camelcase: 0,
    'arrow-parens': 0,
    'comma-dangle': 0,
    'implicit-arrow-linebreak': 0,

    // simple-import-sort
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages.
          ['^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$']
        ]
      }
    ],

    'simple-import-sort/exports': 'error',

    // import
    'import/no-unresolved': 0,
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,

    // jest
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',

    // react
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',

    // jsx-a11y
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,

    // node
    'node/exports-style': ['error', 'module.exports'],
    'node/file-extension-in-import': ['error', 'always'],
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',
    'global-require': 0
  },
  globals: {
    T: true
  }
};
