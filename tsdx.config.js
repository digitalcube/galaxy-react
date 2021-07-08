const image = require('@rollup/plugin-image')
const css = require('rollup-plugin-import-css')
const copy = require('rollup-plugin-copy-assets')

module.exports = {
    rollup(config, options) {
        config.plugins.unshift(image());
        config.plugins.push(css())
        config.plugins.push(
            copy({
                assets: [
                  // You can include directories
                  "src/assets",
                  // You can also include files
                  "src/css",
                ],
            })
        )
        return config;

    }
}