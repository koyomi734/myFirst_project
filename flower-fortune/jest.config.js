const { createDefaultPreset } = require("ts-jest");

/** @type {import("jest").Config} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest", {
      tsconfig: "tsconfig.jest.json"
    }],
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};