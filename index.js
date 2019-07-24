module.exports = {
  rules: {
    "no-var": "error",
    "prefer-const": "error",
    "array-callback-return": 1,
    "array-bracket-spacing": 1,
    "arrow-spacing": 1,
    "block-scoped-var": 1,
    "block-spacing": 1,
    "brace-style": 1,
    "comma-dangle": [1, "always-multiline"],
    "comma-spacing": 1,
    "comma-style": 1,
    "constructor-super": 1,
    curly: 1,
    "dot-notation": 1,
    "func-call-spacing": 1,
    "jsx-quotes": 1,
    "key-spacing": 1,
    "keyword-spacing": 1,
    "linebreak-style": [1, "unix"],
    "object-curly-spacing": [1, "always", { arraysInObjects: false }],
    "operator-linebreak": 1,
    "prefer-arrow-callback": 1,
    "prefer-spread": 1,
    "mocha/no-exclusive-tests": "error",
    "no-case-declarations": 0,
    "no-console": 0,
    "no-dupe-class-members": 1,
    "no-duplicate-imports": 1,
    "no-empty-pattern": 1,
    "no-multiple-empty-lines": 1,
    "no-nested-ternary": 1,
    "no-spaced-func": 1,
    "no-this-before-super": 1,
    "no-trailing-spaces": 1,
    "no-unsafe-negation": 1,
    "no-unused-vars": [1, { vars: "all", args: "none" }],
    "no-useless-computed-key": 1,
    "no-useless-constructor": 1,
    "no-whitespace-before-property": 1,
    quotes: [1, "single", "avoid-escape"],
    semi: [1, "always"],
    "space-before-blocks": 1,
    "jsx-a11y/alt-text": 1,
    "jsx-a11y/img-redundant-alt": 1,
    "prettier/prettier": [
      1,
      {
        singleQuote: true,
        trailingComma: "all",
        jsxBracketSameLine: true,
        printWidth: 160,
        tabWidth: 4
      }
    ],
    "react/display-name": 0,
    "react/jsx-boolean-value": [1, "always"],
    "react/jsx-closing-bracket-location": [
      1,
      { selfClosing: "tag-aligned", nonEmpty: "after-props" }
    ],
    "react/jsx-curly-spacing": 1,
    "react/jsx-equals-spacing": 1,
    "react/jsx-no-undef": 1,
    "react/jsx-pascal-case": [1, { allowAllCaps: true }],
    "react/jsx-tag-spacing": 1,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-children-prop": 1,
    "react/no-deprecated": 1,
    "react/no-did-update-set-state": 0,
    "react/no-direct-mutation-state": 1,
    "react/no-find-dom-node": 0,
    "react/no-string-refs": 1,
    "react/no-unescaped-entities": 0,
    "react/no-unknown-property": 1,
    "react/no-unused-prop-types": 1,
    "react/prop-types": 0,
    "react/self-closing-comp": 1,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,
  },
  env: {
    es6: true,
    commonjs: true,
    browser: true,
    node: true,
    jest: true,
    mocha: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {
    Intercom: false,
    BROWSER: false,
    SKIP_SLOW_TESTS: false,
    LogRocket: false,
    mapboxgl: false,
    GRAPHQLURL: false
  },
  plugins: ["react", "react-hooks", "jsx-a11y", "mocha", "prettier"]
};
