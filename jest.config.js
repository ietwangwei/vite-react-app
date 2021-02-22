module.exports = {
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  transform: {
    '^.+\\.(js|jsx)?$': 'esbuild-jest',
  },
  testMatch: ['<rootDir>/tests/**/*.js'],
  testEnvironment: 'node',
  transformIgnorePatterns: ['/node_modules/'],
};
