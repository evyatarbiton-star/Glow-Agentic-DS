/** @type {import('@svgr/core').Config} */
module.exports = {
  icon: true,
  typescript: true,
  jsxRuntime: 'automatic',
  template: require('./svgr-template.cjs'),
  svgProps: {
    width: '{px}',
    height: '{px}',
    fill: 'none',
  },
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
    ],
  },
  replaceAttrValues: {
    'black': '{color}',
    '#000': '{color}',
    '#000000': '{color}',
  },
}
