export default {
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
