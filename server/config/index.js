var _ = require('lodash');
var lang = require('../common/lang');
// site configuration.
var config = {
  appName: 'SPM',
  defaultDataProvider: 'mysql' // maybe sqlserver
};

// node process configuration
var node = {
  port: 3000
};

// security configuration.
var security = {
  saltCode: 'SPM',
  // The secret for DES decrypt
  desSecret: 'SNS_PLATFORM',
  // The token expired time second
  tokenLife: 24 * 60 * 60 * 7
};
// mysql database.
var db = {
  database: 'SNS_Platform_Test',
  username: 'sns',
  password: 'sns',
  // db configuration.
  options: {
    dialect: 'mysql',
    host: 'localhost',
    port: 3307,
    timezone: '+08:00',
    logging: console.log
  },
  getTableName: function (tabName) {
    // Social network marketing platform
    return 'spm_' + lang.toSnakeCase(tabName);
  },
  syncOptions: {

  }
};
// locales config.
var locales = ['en','zh'];

var url = {
  appBaseUrl: 'http://localhost:3000{0}',
  imageBaseUrl: 'http://localhost:3000/i{0}'
};

// exports site configuration.
module.exports = _.extend({}, config, {
  db: db,
  node: node,
  security: security,
  url: url,
  locales: locales
});
