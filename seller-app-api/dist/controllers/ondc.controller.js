"use strict";

var _services = require("../services");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ondcService = new _services.OndcService();
var OndcController = /*#__PURE__*/function () {
  function OndcController() {
    _classCallCheck(this, OndcController);
  }
  _createClass(OndcController, [{
    key: "productSearch",
    value: function productSearch(req, res, next) {
      // const currentUserAccessToken = res.get('currentUserAccessToken');
      ondcService.productSearch(req.body, req).then(function (data) {
        res.json(data);
      })["catch"](function (err) {
        next(err);
      });
    }
  }, {
    key: "orderSelect",
    value: function orderSelect(req, res, next) {
      // const currentUserAccessToken = res.get('currentUserAccessToken');
      ondcService.orderSelect(req.body, req).then(function (data) {
        res.json(data);
      })["catch"](function (err) {
        next(err);
      });
    }
  }, {
    key: "orderInit",
    value: function orderInit(req, res, next) {
      // const currentUserAccessToken = res.get('currentUserAccessToken');
      ondcService.orderInit(req.body, req).then(function (data) {
        res.json(data);
      })["catch"](function (err) {
        next(err);
      });
    }
  }, {
    key: "orderConfirm",
    value: function orderConfirm(req, res, next) {
      // const currentUserAccessToken = res.get('currentUserAccessToken');
      ondcService.orderConfirm(req.body, req).then(function (data) {
        res.json(data);
      })["catch"](function (err) {
        next(err);
      });
    }
  }, {
    key: "orderTrack",
    value: function orderTrack(req, res, next) {
      // const currentUserAccessToken = res.get('currentUserAccessToken');
      ondcService.orderTrack(req.body, req).then(function (data) {
        res.json(data);
      })["catch"](function (err) {
        next(err);
      });
    }
  }, {
    key: "orderCancel",
    value: function orderCancel(req, res, next) {
      // const currentUserAccessToken = res.get('currentUserAccessToken');
      ondcService.orderCancel(req.body, req).then(function (data) {
        res.json(data);
      })["catch"](function (err) {
        next(err);
      });
    }
  }, {
    key: "orderStatus",
    value: function orderStatus(req, res, next) {
      // const currentUserAccessToken = res.get('currentUserAccessToken');
      ondcService.orderStatus(req.body, req).then(function (data) {
        res.json(data);
      })["catch"](function (err) {
        next(err);
      });
    }
  }, {
    key: "orderStatusUpdate",
    value: function orderStatusUpdate(req, res, next) {
      // const currentUserAccessToken = res.get('currentUserAccessToken');
      ondcService.orderStatusUpdate(req.body, req).then(function (data) {
        res.json(data);
      })["catch"](function (err) {
        next(err);
      });
    }
  }, {
    key: "orderStatusUpdateItems",
    value: function orderStatusUpdateItems(req, res, next) {
      // const currentUserAccessToken = res.get('currentUserAccessToken');
      ondcService.orderStatusUpdateItems(req.body, req).then(function (data) {
        res.json(data);
      })["catch"](function (err) {
        next(err);
      });
    }
  }, {
    key: "orderCancelFromSeller",
    value: function orderCancelFromSeller(req, res, next) {
      // const currentUserAccessToken = res.get('currentUserAccessToken');
      ondcService.orderCancelFromSeller(req.body, req).then(function (data) {
        res.json(data);
      })["catch"](function (err) {
        next(err);
      });
    }
  }, {
    key: "orderUpdate",
    value: function orderUpdate(req, res, next) {
      // const currentUserAccessToken = res.get('currentUserAccessToken');
      ondcService.orderUpdate(req.body, req).then(function (data) {
        res.json(data);
      })["catch"](function (err) {
        next(err);
      });
    }
  }, {
    key: "orderSupport",
    value: function orderSupport(req, res, next) {
      // const currentUserAccessToken = res.get('currentUserAccessToken');
      ondcService.orderSupport(req.body, req).then(function (data) {
        res.json(data);
      })["catch"](function (err) {
        next(err);
      });
    }
  }]);
  return OndcController;
}();
module.exports = OndcController;