const config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\.tsx?$': ['babel-jest'],
  }
}