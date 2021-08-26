const {createJestConfig} = require('tsdx/dist/createJestConfig');
const {paths} = require('tsdx/dist/constants');

/**
 * To support svg import
 * @see https://www.npmjs.com/package/jest-svg-transformer
 */
const config = createJestConfig(undefined, paths.appRoot)
config.transform["^.+\\.svg$"] = "jest-svg-transformer"
config.transform['^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$'] = 'jest-transform-stub';

/**
 * For @testing-library/react
 *
 * @see https://github.com/testing-library/jest-dom#usage
 **/
if (config.setupFilesAfterEnv) {
    config.setupFilesAfterEnv.push('<rootDir>/jest-setup.js')
} else {
    config.setupFilesAfterEnv = ['<rootDir>/jest-setup.js']
}
module.exports = config;