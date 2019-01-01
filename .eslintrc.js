module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    // "extends": "eslint:recommended",
    "extends": [
      "react-app",
      "plugin:prettier/recommended",
      'plugin:import/errors',
    ],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "rules": {
      'import/order': [
        'error',
        {
          'groups': [
            ['builtin', 'external'],
            'internal',
            'parent',
            'sibling',
            'index',
          ],
        },
      ],
      "linebreak-style": [
        "error",
        "unix"
      ],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prettier/prettier":"error",
      "quotes": [
        "error",
        "single"
      ],
    }
};
