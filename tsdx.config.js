const image = require('@rollup/plugin-image')
const css = require('rollup-plugin-import-css')
const copy = require('rollup-plugin-copy-assets')
const scss = require('rollup-plugin-scss')
const svg = require('@svgr/rollup')  // 追加：SVG用プラグイン

module.exports = {
    rollup(config, options) {
        const plugins = [
            svg(),  // SVGをReactコンポーネントとしてインポート
            image(),
            css(),
            copy({
                assets: [
                    "src/assets"
                ],
            }),
            scss({
                output: 'dist/css/styles.css',
                sass: require('sass')
            })
        ];

        const existingPlugins = Array.isArray(config.plugins) 
            ? config.plugins.filter(p => p && typeof p === 'object')
            : [];

        return {
            ...config,
            plugins: [...existingPlugins, ...plugins]
        };
    }
};