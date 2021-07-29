// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const path = require('path');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on: any, config: any) => {
  const absPathToFixture = path.resolve(__dirname, '../fixtures/index.html');
  const relPathToFixture = path.relative(process.cwd(), absPathToFixture);


  on('task', {
    resolvePathToPackage(name: string) {
      return path.relative(path.dirname(absPathToFixture), require.resolve(name));
    },
    resolvePathToFixture() {
      return relPathToFixture;
    },
  });

  return config;
};

