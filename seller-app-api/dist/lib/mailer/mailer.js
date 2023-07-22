"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _path = _interopRequireDefault(require("path"));
var _emailTemplates = _interopRequireDefault(require("email-templates"));
var _nodemailer = _interopRequireDefault(require("nodemailer"));
var _config = _interopRequireDefault(require("../config"));
var _emails = _interopRequireDefault(require("./emails"));
var _constants = require("../../utils/constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Mailer = /*#__PURE__*/function () {
  function Mailer(sender) {
    _classCallCheck(this, Mailer);
    this.sender = sender || _config["default"].get('email').sender;
    this.transport = _nodemailer["default"].createTransport(_config["default"].get('email').transport.SMTP);
    this.emailTemplate = new _emailTemplates["default"]({
      message: {
        from: this.sender
      },
      send: true,
      transport: this.transport,
      views: {
        root: _path["default"].resolve(__dirname, 'emails'),
        options: {
          extension: 'pug'
        }
      },
      juice: true,
      juiceResources: {
        preserveImportant: true,
        webResources: {
          // this is the relative directory to your CSS/image assets
          relativeTo: _path["default"].join(__dirname, '..', '..', 'public', 'stylesheets')
        }
      }
    });
  }

  /**
   * Get email instance
   * @param {string} type Email type
   * @param {Object} options Options
   * @param {String} [options.sender] email sender
   * @param {Array}  [options.receivers] email receivers array
   * @param {Object} [options.data] email template input data
   * @return {Object} Email instance
   */
  _createClass(Mailer, [{
    key: "getEmail",
    value: function getEmail(type) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      options.sender = options.sender || this.sender;
      options.emailTemplate = this.emailTemplate;
      return new _emails["default"][type](options);
    }

    /**
     * Method to send forgot password email
     */
  }, {
    key: "forgotPassword",
    value: function forgotPassword(options) {
      return this.getEmail(_constants.EMAIL_TEMPLATES.FORGOT_PASSWORD, options);
    }

    /**
     * Method to send sign up(wellcome onboard) email
     */
  }, {
    key: "signUp",
    value: function signUp(options) {
      return this.getEmail(_constants.EMAIL_TEMPLATES.SIGN_UP, options);
    }

    /**
     * Method to send sign up(wellcome onboard) email
     */
  }, {
    key: "send",
    value: function send(options) {
      return this.getEmail(options.template, options);
    }

    /**
     * Method to send OTP
     */
  }, {
    key: "register",
    value: function register(options) {
      return this.getEmail(_constants.EMAIL_TEMPLATES.REGISTER, options);
    }

    /**
     * Method to send OTP
     */
  }, {
    key: "resendOTP",
    value: function resendOTP(options) {
      return this.getEmail(_constants.EMAIL_TEMPLATES.REGISTER, options);
    }

    /**
     * Method to send sign up(wellcome onboard) email
     */
  }, {
    key: "createPRS",
    value:
    /**
     * Method to send sign up(wellcome onboard) email
     */
    function createPRS(options) {
      return this.getEmail(_constants.EMAIL_TEMPLATES.CREATE_PRS, options);
    }
    /**
     * Method to send sign up(wellcome onboard) email
     */
  }, {
    key: "exceptionEmail",
    value: function exceptionEmail(options) {
      return this.getEmail(_constants.EMAIL_TEMPLATES.EXCEPTION, options);
    }
  }]);
  return Mailer;
}();
var _default = Mailer;
exports["default"] = _default;