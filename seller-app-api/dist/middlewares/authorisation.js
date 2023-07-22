"use strict";

var _authorisation = require("../lib/authorisation");
exports.middleware = function (options) {
  return function (req, res, next) {
    var httpRequestMethod = req.method.toUpperCase();
    var authorisation = new _authorisation.Authorisation(req.user, options.roles);

    // If user is allowed to access given resource then moved to next function else forbid
    authorisation.isAllowed().then(function (permission) {
      req.permission = permission;
      next();
    })["catch"](function () {
      res.status(403).send();
    });
  };
};