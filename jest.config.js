const path = require('path');

module.exports = {
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    testMatch: ['**/*.spec.ts?(x)'],
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css)$': "identity-obj-proxy",
    },
};