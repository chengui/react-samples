const CracoAntDesignPlugin = require("craco-antd");

const host = "http://127.0.0.1:8000";

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@primary-color": "#106DAB",
        },
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#106DAB",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  devServer: {
    proxy: {
      "/api/test": {
        "target": host,
        changeOrigin: true
      },
    },
  },
};
