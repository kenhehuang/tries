var lang = require('../../helpers/lang');

var SystemRoleName = lang.createEnum(
  [
    'Administrators',
    'Registered',
    'Guests'
  ]
);

module.exports = SystemRoleName;