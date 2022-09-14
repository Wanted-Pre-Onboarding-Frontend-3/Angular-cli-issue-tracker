// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    plugins: [
      {
        apply: (compiler) => {
          compiler.hooks.done.tap('DonePlugin', (stats) => {
            setTimeout(() => {
              process.exit(0);
            });
          });
        },
      },
    ],
  })
);
