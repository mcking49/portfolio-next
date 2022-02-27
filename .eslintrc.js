export default {
  extends: "next/core-web-vitals",
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-shadow": ["error", { builtinGlobals: false }],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "array-bracket-newline": ["error", "consistent"],
    "block-scoped-var": ["error"],
    "comma-dangle": ["error", "always-multiline"],
    curly: ["error", "all"],
    "eol-last": ["error", "always"],
    "no-debugger": "off",
    "no-extra-boolean-cast": "off",
    "no-shadow": "off",
    quotes: ["error", "double"],
  },
}
