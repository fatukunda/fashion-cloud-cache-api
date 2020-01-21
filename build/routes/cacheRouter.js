"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _cacheController = _interopRequireDefault(require("../controllers/cacheController"));

var createCache = _cacheController["default"].createCache;
var cacheRouter = (0, _express.Router)(); // Create cache

cacheRouter.post('/cache', createCache);
var _default = cacheRouter;
exports["default"] = _default;
//# sourceMappingURL=cacheRouter.js.map