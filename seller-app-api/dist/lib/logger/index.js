"use strict";

var _winston = _interopRequireDefault(require("winston"));
var _excluded = ["timestamp", "level", "message"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var _winston$format = _winston["default"].format,
  combine = _winston$format.combine,
  timestamp = _winston$format.timestamp,
  colorize = _winston$format.colorize,
  align = _winston$format.align,
  prettyPrint = _winston$format.prettyPrint,
  printf = _winston$format.printf,
  json = _winston$format.json;
var logger = _winston["default"].createLogger({
  format: combine(colorize(), timestamp(), align(), printf(function (info) {
    var timestamp = info.timestamp,
      level = info.level,
      message = info.message,
      args = _objectWithoutProperties(info, _excluded);
    return "[".concat(level, "]:[").concat(timestamp, "] ---> ").concat(message);
  })),
  transports: [new _winston["default"].transports.Console({
    json: true,
    colorize: true,
    level: 'info',
    format: _winston["default"].format.simple()
  })]
});

// do not exit logger when uncaught exception occures
logger.exitOnError = false;

// write all the logs to the file in production environment only
if (process.env.NODE_ENV === 'production') {
  logger.add(new _winston["default"].transports.File({
    filename: __dirname + '/actions.log'
  }));
}
module.exports = logger;