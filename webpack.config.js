const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4200/",
    uniqueName: "microfe1"
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
