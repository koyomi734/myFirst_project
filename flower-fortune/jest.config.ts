import type {Config} from 'jest';

const config: Config = {
  preset: "ts-jest",
  transform: {
    "^.+.tsx?$": ["ts-jest", {
      tsconfig: "tsconfig.jest.json"
    }],
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: "jsdom"
};

export default config;