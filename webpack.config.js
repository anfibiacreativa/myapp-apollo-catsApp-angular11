const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4200/",
    uniqueName: "microfe1"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "microfe1",
      remotes: {
      },
      library: { type: "var", name: "microfe1" },
      filename: "remoteEntry.js",
      exposes: {
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]       
    })
  ],
};
