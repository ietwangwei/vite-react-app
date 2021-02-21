module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  testMatch: ['<rootDir>/tests/**/*.js'],
  testEnvironment: 'node',
  // testEnvironment: 'jest-environment-node',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
