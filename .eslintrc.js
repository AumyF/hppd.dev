/**
 * @type import("eslint").ESLint.Options
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  // parser: "@typescript-eslint/parser",
  plugins: [
    // "vue",
    // "nuxt",
    // "@typescript-eslint/eslint-plugin",
    "simple-import-sort",
    "sort-destructure-keys",
    "typescript-sort-keys",
  ],
  extends: [
    "eslint:recommended",
    // "plugin:vue/recommended",
    // https://github.com/nuxt/eslint-plugin-nuxt#recommended-rules
    // "plugin:nuxt/recommended",
    "@nuxtjs/eslint-config-typescript",
    "plugin:typescript-sort-keys/recommended",
    "prettier",
    "prettier/vue",
  ],
  ignorePatterns: ["*.js", "nuxt.config.ts"],
  // add your custom rules here
  rules: {
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "sort-imports": "off",
    "import/order": "off",
    "sort-destructure-keys/sort-destructure-keys": [
      "warn",
      { caseSensitive: false },
    ],
  },
};
