module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|scss)$": "identity-obj-proxy",
    "^@/lib/utils$": "<rootDir>/src/lib/utils",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
