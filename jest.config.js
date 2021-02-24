module.exports = {
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  transform: {
    '^.+\\.(js|jsx)?$': 'esbuild-jest',
  },
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
  testMatch: ['<rootDir>/tests/**/*.{js,jsx}'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/'],
};
