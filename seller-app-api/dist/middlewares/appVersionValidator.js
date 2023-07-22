"use strict";

var _config = _interopRequireDefault(require("../lib/config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
exports.middleware = function (options) {
  return function (req, res, next) {
    if (req.get('appVersion')) {
      var systemVersion = _config["default"].get('system-setting').minAllowedAppVersion.split('.');
      var appVersion = req.get('appVersion').split('.');
      var version = 0;
      var system = 0;
      var multiplier = 100;
      var systemMultiplier = 100;
      for (var i = 0; i < appVersion.length; i++) {
        version += appVersion[i] * multiplier;
        multiplier = multiplier / 10;
      }
      for (var _i = 0; _i < systemVersion.length; _i++) {
        system += systemVersion[_i] * systemMultiplier;
        systemMultiplier = systemMultiplier / 10;
      }
      if (system <= version) {
        next();
      } else {
        res.status(426).send();
      }
    } else {
      next();
    }
  };
};