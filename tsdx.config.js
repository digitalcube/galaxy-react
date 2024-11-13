const image = require('@rollup/plugin-image')
const css = require('rollup-plugin-import-css')
const copy = require('rollup-plugin-copy-assets')
const scss = require('rollup-plugin-scss')

module.exports = {
    rollup(config, options) {
        return {
            ...config,
            plugins: [
                ...config.plugins,
                image(),
                css(),
                copy({
                    assets: [
                        "src/assets"
                    ]
                }),
                scss({
                    output: 'dist/css/styles.css',
                    sass: require('sass')
                })
            ]
        };
    }
};