const { resolve } = require('path')
module.exports = {
  stories: [
    '../stories/pages/admin/ListSites.stories.tsx',
    '../src/components/**/*.stories.@(ts|tsx|js|jsx)',
    '../src/routings/**/*.stories.@(ts|tsx|js|jsx)',
    '../stories/**/*.stories.@(ts|tsx|js|jsx)'
  ],
  core: {
    builder: "webpack5"
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-root-attribute/register',
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
		check: true, // type-check stories during Storybook build
		reactDocgen: 'none',
  },
  webpackFinal: async(config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            webpackImporter: false,
            sassOptions: {
              includePaths: ['node_modules', resolve(__dirname, '../src/scss')],
            },
            implementation: require('sass'),
          },
        },
      ],
      include: resolve(__dirname, '../'),
    })
    return config
  }
};