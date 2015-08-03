var _ = require('lodash');
var sequelize = require('./sequelize');

// require all data model schema here.
var User = require('./User');
var Profile = require('./Profile.js');
//


var syncOptions = {
  force: true,
  match: /_Test$/
};

module.exports = {
  /**
   * Provider api to sync create databse and tables.
   * @param  {Object} options  sequelize sync configuration
   * @return {Promise}         promise
   */
  syncDB: function (options) {
    var sync = _.extend({}, syncOptions, options);
    return sequelize.sync(sync);
  }
};