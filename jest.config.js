module.exports = {
    roots: ['<rootDir>'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
      '^components(.*)$': '<rootDir>/components$1',
      '^constants/confirms(.*)$': '<rootDir>/constants/confirms$1',
      '^hooks(.*)$': '<rootDir>/hooks$1',
      '^interfaces(.*)$': '<rootDir>/interfaces$1',
      '^styles(.*)$': '<rootDir>/styles$1',
      '^utils(.*)$': '<rootDir>/utils$1',
    },
}