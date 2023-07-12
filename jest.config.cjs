module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".(css|scss)$": "identity-obj-proxy",
    "^@/lib/(.*)$": "<rootDir>/src/lib/$1",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
