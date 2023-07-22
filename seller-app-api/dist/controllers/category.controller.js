"use strict";

var _services = require("../services");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var categoryService = new _services.CategoryService();
var CategoryController = /*#__PURE__*/function () {
  function CategoryController() {
    _classCallCheck(this, CategoryController);
  }
  _createClass(CategoryController, [{
    key: "list",
    value: function list(req, res, next) {
      // const currentUserAccessToken = res.get('currentUserAccessToken');
      categoryService.list().then(function (data) {
        res.json(data);
      })["catch"](function (err) {
        next(err);
      });
    }
  }, {
    key: "get",
    value: function get(req, res, next) {
      // const currentUserAccessToken = res.get('currentUserAccessToken');
      var id = req.params.id;
      categoryService.get(id).then(function (data) {
        res.json(data);
      })["catch"](function (err) {
        next(err);
      });
    }
  }, {
    key: "update",
    value: function update(req, res, next) {
      // const currentUserAccessToken = res.get('currentUserAccessToken');
      var data = req.body;
      var id = req.params.id;
      categoryService.update(data, id).then(function (data) {
        res.json(data);
      })["catch"](function (err) {
        next(err);
      });
    }
  }, {
    key: "create",
    value: function create(req, res, next) {
      var data = req.body;
      // const currentUserAccessToken = res.get('currentUserAccessToken');
      categoryService.create(data).then(function (data) {
        res.json(data);
      })["catch"](function (err) {
        next(err);
      });
    }
  }]);
  return CategoryController;
}();
module.exports = CategoryController;