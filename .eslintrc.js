/**
 * @type import("eslint").ESLint.Options
 */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    "@typescript-eslint",
    "simple-import-sort",
    "sort-destructure-keys",
    "typescript-sort-keys",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:typescript-sort-keys/recommended",
    "prettier/@typescript-eslint",
  ],
  ignorePatterns: ["*.js", "nuxt.config.ts"],
  // add your custom rules here
  rules: {
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "sort-imports": "off",
    "import/order": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-namespace": "off",
    "sort-destructure-keys/sort-destructure-keys": [
      "warn",
      { caseSensitive: false },
    ],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
};
