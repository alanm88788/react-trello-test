const CracoAlias = require('craco-alias');
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@components': './src/components',
          '@containers': './src/containers',
          '@actions': './src/redux/actions',
          '@data': './src/data',
          '@utils': './src/utils',
          '@styles': './src/styles',
          '@icons': './src/assets/icons',
          '@images': './src/assets/images',
        },
      },
    },
  ],
};
