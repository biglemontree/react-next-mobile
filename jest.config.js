module.exports = {
  globals: {
    __VERSION__: require('./lerna.json').version,
  },
  moduleNameMapper: {
    'react-mobile$': '<rootDir>/packages/antd-mobile/src/index.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
}
