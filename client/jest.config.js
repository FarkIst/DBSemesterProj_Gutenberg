module.exports = {
  automock: false,
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).js?(x)'],
  collectCoverage: true,
  testEnvironment: 'jsdom',
  setupFiles: ['@babel/polyfill'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupTestFrameworkScriptFile: '<rootDir>/internals/config/test/setupTests.js',
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};
