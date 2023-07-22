"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var jwt = require('jsonwebtoken');
var JsonWebToken = /*#__PURE__*/function () {
  /**
   *
   * @param {*} options JWT options
   */
  function JsonWebToken(options) {
    _classCallCheck(this, JsonWebToken);
    this.options = options;
  }

  /**
   * Sign JWT token
   * @param {*} token Instance of Token class
   */
  _createClass(JsonWebToken, [{
    key: "sign",
    value: function sign(token) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        jwt.sign(token.payload, _this.options.secret, {
          expiresIn: token.exp
        }, function (err, token) {
          if (err) {
            reject(err);
          } else {
            resolve(token);
          }
        });
      });
    }

    /**
     * Verify JWT token
     * @param {} jwtToken JWT token in String format
     */
  }, {
    key: "verify",
    value: function verify(jwtToken) {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        jwt.verify(jwtToken, _this2.options.secret, function (err, decoded) {
          if (err) {
            reject(err);
          } else {
            resolve(decoded);
          }
        });
      });
    }
  }]);
  return JsonWebToken;
}();
var _default = JsonWebToken;
exports["default"] = _default;