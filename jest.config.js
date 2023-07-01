const path = require("path");

module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|scss)$": "identity-obj-proxy",
    "^@/lib/utils$": path.resolve(__dirname, "src/lib/utils"),
  },
};
