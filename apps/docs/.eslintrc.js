module.exports = {
  extends: ["plugin:storybook/recommended"],
  overrides: [
    {
      files: ["./stories/*.stories.tsx", "./stories/**/*.stories.tsx"],
      rules: {
        "@typescript-eslint/no-empty-function": "off",
      },
    },
  ],
};
