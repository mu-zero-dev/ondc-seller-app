"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _index = require("../lib/errors/index.js");
var _validateToken = _interopRequireDefault(require("../lib/firebase/validateToken.js"));
var _messages = _interopRequireDefault(require("../utils/messages.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var authentication = function authentication(options) {
  return function (req, res, next) {
    var authHeader = req.headers.authorization;
    if (authHeader) {
      var idToken = authHeader.split(" ")[1];
      (0, _validateToken["default"])(idToken).then(function (decodedToken) {
        if (decodedToken) {
          req.user = {
            decodedToken: decodedToken,
            token: idToken
          };
          next();
        } else {
          next(new _index.UnauthenticatedError(_messages["default"].LOGIN_ERROR_USER_ACCESS_TOKEN_INVALID));
        }
      });
    } else {
      next(new _index.UnauthenticatedError(_messages["default"].LOGIN_ERROR_USER_ACCESS_TOKEN_INVALID));
    }
  };
};
var _default = authentication;
exports["default"] = _default;