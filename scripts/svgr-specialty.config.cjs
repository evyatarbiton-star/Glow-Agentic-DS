/** @type {import('@svgr/core').Config} */
module.exports = {
  icon: true,
  typescript: true,
  jsxRuntime: 'automatic',
  template: require('./svgr-specialty-template.cjs'),
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
      // Prefix IDs to avoid clip-path collisions when multiple
      // specialty icons render on the same page
      {
        name: 'prefixIds',
        params: {
          prefixIds: true,
          prefixClassNames: true,
        },
      },
    ],
  },
  // ⚠️  NO replaceAttrValues — brand colors stay as-is
}
