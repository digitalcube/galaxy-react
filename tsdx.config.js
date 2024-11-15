const image = require('@rollup/plugin-image')
const css = require('rollup-plugin-import-css')
const copy = require('rollup-plugin-copy-assets')
const scss = require('rollup-plugin-scss')

module.exports = {
    rollup(config, options) {
        // Babel の設定を修正
        config.plugins = config.plugins.map(plugin => {
            if (plugin && plugin.name === 'babel') {
                return {
                    ...plugin,
                    options: {
                        ...plugin.options,
                        babelHelpers: 'runtime'  // 'bundled' から 'runtime' に変更
                    }
                };
            }
            return plugin;
        });

        // 他のプラグインを追加
        config.plugins.unshift(image());
        config.plugins.push(css())
        config.plugins.push(
            copy({
                assets: [
                    "src/assets"
                ],
            })
        )
        config.plugins.push(
            scss({
                output: 'dist/css/styles.css',
                sass: require('sass')
            })
        )
        return config;
    }
}