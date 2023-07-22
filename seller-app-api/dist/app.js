"use strict";

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _cors = _interopRequireDefault(require("cors"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _morgan = _interopRequireDefault(require("morgan"));
var _ondc = _interopRequireDefault(require("./routes/ondc.routes"));
var _config = _interopRequireDefault(require("./lib/config"));
var _mailer = _interopRequireDefault(require("./lib/mailer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import 'regenerator-runtime/runtime.js';

//import initializeFirebase from './lib/firebase/initializeFirebase.js';
//initializeFirebase();
var mailer = new _mailer["default"]();
var app = (0, _express["default"])();

/**
 * Enable Cross Origin Resource Sharing to whitelist origins
 */
var whitelist = _config["default"].get('cors').whitelistUrls;
var corsOptionsDelegate = function corsOptionsDelegate(req, callback) {
  var corsOptions = {
    credentials: true
  };
  // console.log('req url ', req.originalUrl)
  // console.log("req.header ",JSON.stringify(req.headers), whitelist);
  corsOptions['origin'] = whitelist.indexOf(req.header('Origin')) !== -1;
  corsOptions['exposedHeaders'] = 'set-cookie';
  // console.log('corsOptions ',corsOptions)
  callback(null, corsOptions); // callback expects two parameters: error and optionsns
};

app.use((0, _morgan["default"])('dev'));

/**
 * Log http request details
 */
//  app.use(logger("HTTP REQUEST LOG  [:date[web]] | :method | :url | :status | :remote-addr | :remote-user | :user-agent | HTTP/:http-version | :res[content-length] | :response-time[digits]"));

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
// parse application/json
app.use(_bodyParser["default"].json());
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public')));

// Application REST APIs
app.use('/api', (0, _cors["default"])(corsOptionsDelegate), _ondc["default"]);
app.use(_express["default"].json({
  limit: '50mb'
}));
app.use(_express["default"].urlencoded({
  limit: '50mb'
}));
app.disable('etag');

// Error handler
app.use(function (err, req, res, next) {
  // Send response status based on custom error code
  if (err.status) {
    return res.status(err.status).json({
      error: err.message
    });
  }

  // Send an exception email to dev users
  var exceptionEmailRecipients = _config["default"].get('general').exceptionEmailRecipientList;
  mailer.exceptionEmail({
    receivers: exceptionEmailRecipients,
    data: {
      err: err
    }
  }).send();
  console.log("errr--------------->", err);
  // If no custom error is thrown then return 500(server side error/exception)
  res.status(500).json({
    error: 'Something went wrong. Please try again'
  });
});
module.exports = app;