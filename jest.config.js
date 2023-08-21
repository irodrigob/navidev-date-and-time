/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // All imported modules in your tests should be mocked automatically
  // automock: false,

  // Stop running tests after `n` failures
  // bail: 0,

  // The directory where Jest should store its cached dependency information
  // cacheDirectory: "C:\\Users\\irodr\\AppData\\Local\\Temp\\jest",

  // Automatically clear mock calls, instances, contexts and results before every test
  // clearMocks: false,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: undefined,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of regexp pattern strings used to skip coverage collection
  // coveragePathIgnorePatterns: [
  //   "\\\\node_modules\\\\"
  // ],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",
      

    // An array of file extensions your modules use
    moduleFileExtensions: ["ts", "tsx", "js"],

    // The paths to modules that run some code to configure or set up the testing environment before each test
    //setupFiles: ["<rootDir>/setenv.js"],

    // The test environment that will be used for testing
    testEnvironment: "node",

    // The glob patterns Jest uses to detect test files
    testMatch: ["**/__tests__/*.+(ts|tsx|js)", "**/*.test.ts"],

    // A map from regular expressions to paths to transformers
    transform: {
        "\\.(ts|tsx)$": ["ts-jest",{
            tsconfig: "tsconfig.json"
        }]
    },
    testTimeout: 10000,
    transformIgnorePatterns: ["/node_modules/"]

};

module.exports = config;
