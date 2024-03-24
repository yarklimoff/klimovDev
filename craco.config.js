const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              ...require("./src/theme/global.js"),
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
