const { resolve } = require('path')

module.exports = {
  stories: [
    '../stories/pages/admin/ListSites.stories.tsx',
    '../src/components/**/*.stories.@(ts|tsx|js|jsx)',
    '../src/routings/**/*.stories.@(ts|tsx|js|jsx)',
    '../stories/**/*.stories.@(ts|tsx|js|jsx)'
  ],
  core: {
    builder: 'webpack5'
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-root-attribute/register',
  ],
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
  },
  webpackFinal: async(config) => {
    // SASS の設定
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
    });

    // TypeScript の解決を設定
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  }
};