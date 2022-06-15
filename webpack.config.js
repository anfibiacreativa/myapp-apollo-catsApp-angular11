const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {

  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  library: { type: "module" },
  plugins: [
    new ModuleFederationPlugin({
      name: "microfe1",
      remotes: {
      },
      library: { type: "var", name: "microfe1" },
      filename: "remoteEntry.js",
      exposes: {
      }, 
    })
  ],
};





const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'microfe1',
  output: {
    publicPath: "http://localhost:4200/",
    uniqueName: "microfe1"
  },
  exposes: {
    './Module': './projects/mfe1/src/app/flights/flights.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});