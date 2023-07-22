"use strict";

var _path = _interopRequireDefault(require("path"));
var _nconf = _interopRequireDefault(require("nconf"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var env = process.env.NODE_ENV || 'development'; // By default development environment is picked

//  1. `process.argv`
//  2. `process.env`
_nconf["default"].argv().env();

// 3. Pick up the base configuration
_nconf["default"].file(_path["default"].join(__dirname, './base_config.json'));

// 4. Override arguments based on environment
_nconf["default"].file(_path["default"].join(__dirname, "./".concat(env, "_env_config.json")));

// 5. Update API Url

var apiUrl = _nconf["default"].get('express').protocol + (_nconf["default"].get('express').useFqdnForApis ? _nconf["default"].get('express').fqdn : _nconf["default"].get('express').ipAddress) + ':' + _nconf["default"].get('express').port + '/';
_nconf["default"].set('express:apiUrl', apiUrl);

//
if (env !== 'development') {
  //    console.log("in check");
  //
  //     nconf.set('express:protocol', process.env.PROTOCOL);
  //     nconf.set('express:useFqdnForApis', process.env.USE_FQDN_FOR_APIS);
  //     nconf.set('express:fqdn', process.env.FQDN);
  //     nconf.set('express:ipAddress', process.env.HOST);
  //     nconf.set('express:port', process.env.PORT);

  _nconf["default"].set('firebase:account', process.env.FIREBASE_SERVICE_ACCOUNT_JSON_PATH);
  _nconf["default"].set('sellerConfig:BPP_URI', process.env.BPP_URI);
  _nconf["default"].set('seller:serverUrl', process.env.SELLER_SERVER_URL);
  _nconf["default"].set('sellerConfig:BPP_ID', process.env.BPP_ID);
  _nconf["default"].set('sellerConfig:BAP_URI', process.env.BAP_ID);
  _nconf["default"].set('sellerConfig:BAP_ID', process.env.BAP_URI);
  _nconf["default"].set('sellerConfig:LOGISTICS_DELIVERY_TYPE', process.env.LOGISTICS_DELIVERY_TYPE);
  _nconf["default"].set('sellerConfig:LOGISTICS_BAP_ID', process.env.LOGISTICS_BAP_ID);
  _nconf["default"].set('database:host', process.env.DATABASE_HOST);
  _nconf["default"].set('database:username', process.env.DATABASE_USERNAME);
  _nconf["default"].set('database:password', process.env.DATABASE_PASSWORD);
  _nconf["default"].set('database:name', process.env.DATABASE_NAME_SELLER_CLIENT);
  _nconf["default"].set('database:port', process.env.DATABASE_PORT);

  // const apiUrl = process.env.PROTOCOL + process.env.HOST + ':' + process.env.PORT + '/';
  // nconf.set('express:apiUrl', apiUrl);
  //
  //  const apiUrl = nconf.get('express').protocol + (nconf.get('express').useFqdnForApis ? nconf.get('express').fqdn : nconf.get('express').ipAddress) + ':' + nconf.get('express').port + '/'
  //  nconf.set('express:apiUrl', apiUrl)
}

module.exports = _nconf["default"];