module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    testEnvironment: 'node',
    globals: {
        'ts-jest': {
            useESM: true,
        },
    },
};
