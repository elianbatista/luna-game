export default {
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node'
}
