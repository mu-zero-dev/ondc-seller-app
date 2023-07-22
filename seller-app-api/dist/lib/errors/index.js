"use strict";

var _unauthenticated = _interopRequireDefault(require("./unauthenticated.error"));
var _unauthorised = _interopRequireDefault(require("./unauthorised.error"));
var _noRecordFound = _interopRequireDefault(require("./no-record-found.error"));
var _duplicateRecordFound = _interopRequireDefault(require("./duplicate-record-found.error"));
var _badRequestParameter = _interopRequireDefault(require("./bad-request-parameter.error"));
var _conflict = _interopRequireDefault(require("./conflict.error"));
var _preconditionRequired = _interopRequireDefault(require("./precondition-required.error"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
exports.UnauthenticatedError = _unauthenticated["default"];
exports.UnauthorisedError = _unauthorised["default"];
exports.NoRecordFoundError = _noRecordFound["default"];
exports.DuplicateRecordFoundError = _duplicateRecordFound["default"];
exports.BadRequestParameterError = _badRequestParameter["default"];
exports.ConflictError = _conflict["default"];
exports.PreconditionRequiredError = _preconditionRequired["default"];