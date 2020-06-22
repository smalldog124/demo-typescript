module.exports = {
  globals: {
      "ts-jest": {
          tsConfig: "tsconfig.json"
      }
  },
  moduleFileExtensions: [
      "ts",
      "js"
  ],
  transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: [
      "**/test/**/*.test.(ts|js)",
      "**/__tests__/**/*.spac.(ts|js)"
  ],
  testEnvironment: "node"
};