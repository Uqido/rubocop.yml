module.exports = {
  "extends": "standard",
  "globals": {
    "self": false,
    "$": false,
    "Turbolinks": false
  },
  "plugins": ["react"],
  "parser": "babel-eslint",
  "rules": {
    "curly": ["error", "multi-or-nest", "consistent"],
    "key-spacing": ["error", { align: "value" }],
    "no-eval": "off",
    "no-multi-spaces": ["error", { exceptions: {
      "VariableDeclarator": true,
      "ImportDeclaration": true
    } }],
    "no-return-assign": "off",
    "space-before-function-paren": ["error", "never"],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  }
};
