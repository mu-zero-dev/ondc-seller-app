"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var config = require('../config');
/**
 * initialize firebase 
 */
var initializeFirebase = function initializeFirebase() {
  _firebaseAdmin["default"].initializeApp({
    credential: _firebaseAdmin["default"].credential.cert(config.get("firebase").account)
  });
};
var _default = initializeFirebase;
exports["default"] = _default;