module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  plugins: ["css"],
  extends: [
    "eslint:recommended",
    "plugin:@next/next/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
    "plugin:css/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    // 要調整
    "@typescript-eslint/naming-convention": 0,
  },
  globals: {
    window: true,
    localStorage: true,
    ErrorUtils: false,
    console: true,
    alert: true,
    HTMLDivElement: true,
    console: true,
    JSX: true,
    HTMLInputElement: true,
  },
  overrides: [
    {
      extends: ["plugin:jest/recommended"],
      files: ["src/**/*.test.ts{,x}", "src/**/*.spec.ts{,x}"],
      rules: {
        "func-names": 0,
        "jest/no-alias-methods": 0,
        "jest/valid-title": 0,
        "jest/no-conditional-expect": 0,
        "jest/expect-expect": [
          2,
          { assertFunctionNames: ["expect", "expectSaga"] },
        ],
      },
    },
    {
      files: ["src/**/*.tsx"],
      rules: {
        "import/no-default-export": 0,
      },
    },
  ],
};
