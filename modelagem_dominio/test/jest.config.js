module.exports = {
    preset: 'ts-jest',
    testEnviroment: 'node',
    testMatch: ['**/test/**/*.test.ts'],
    collectCoverage: true,
    moduleNameMaper: {
        '^@/(.*)': '<rootDir>/src/$1'
    }
}