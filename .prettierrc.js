/** @type {import("prettier").Config} */
module.exports = {
  ...require("@xionhub/fsd-prettier"),
  arrowParens: "avoid",
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: "lf",
  printWidth: 120,
  proseWrap: "preserve",
  quoteProps: "as-needed",
  semi: true,
  tabWidth: 2,
  trailingComma: "es5",
};
