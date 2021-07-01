const image = require('@rollup/plugin-image')
const css = require('rollup-plugin-import-css')

module.exports = {
    rollup(config, options) {
        config.plugins.unshift(image());
        config.plugins.push(css())
        return config;

    }
}