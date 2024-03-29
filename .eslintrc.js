
module.exports = {
  "env": {
    "browser": true,
    "es2022": true
  },
  "extends": ["plugin:react/recommended", "google", "prettier"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 13,
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint"],
  "rules": {},
  "settings": {
    "react": {
      "version": "latest"
    }
  }
}