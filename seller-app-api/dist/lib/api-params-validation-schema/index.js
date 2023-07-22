"use strict";

var _authenticationValidation = _interopRequireDefault(require("./authentication.validation.schema"));
var _userValidation = _interopRequireDefault(require("./user.validation.schema"));
var _labValidation = _interopRequireDefault(require("./lab.validation.schema"));
var _processValidation = _interopRequireDefault(require("./process.validation.schema"));
var _localTestMethodCodeValidation = _interopRequireDefault(require("./localTestMethodCode.validation.schema"));
var _testMethodCodeValidation = _interopRequireDefault(require("./testMethodCode.validation.schema"));
var _methodDescriptorValidation = _interopRequireDefault(require("./methodDescriptor.validation.schema"));
var _unitValidation = _interopRequireDefault(require("./unit.validation.schema"));
var _controlLotValidation = _interopRequireDefault(require("./controlLot.validation.schema"));
var _localAttributeValidation = _interopRequireDefault(require("./localAttribute.validation.schema"));
var _productValidation = _interopRequireDefault(require("./product.validation.schema"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
exports.authSchema = _authenticationValidation["default"];
exports.userSchema = _userValidation["default"];
exports.labSchema = _labValidation["default"];
exports.processSchema = _processValidation["default"];
exports.localTestMethodCodeSchema = _localTestMethodCodeValidation["default"];
exports.testMethodCodeSchema = _testMethodCodeValidation["default"];
exports.methodDescriptorSchema = _methodDescriptorValidation["default"];
exports.localAttributeSchema = _localAttributeValidation["default"];
exports.controlLotSchema = _controlLotValidation["default"];
exports.unitSchema = _unitValidation["default"];
exports.productSchema = _productValidation["default"];