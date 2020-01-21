"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _cacheController = _interopRequireDefault(require("../controllers/cacheController"));

var createCache = _cacheController["default"].createCache,
    getKeyCache = _cacheController["default"].getKeyCache,
    findAllKeysInCache = _cacheController["default"].findAllKeysInCache,
    removeKeyFromCache = _cacheController["default"].removeKeyFromCache,
    removeAllKeys = _cacheController["default"].removeAllKeys;
var cacheRouter = (0, _express.Router)();
cacheRouter.post('/cache', createCache);
cacheRouter.get('/cache/:key', getKeyCache);
cacheRouter.get('/cache-keys', findAllKeysInCache);
cacheRouter["delete"]('/cache/:key', removeKeyFromCache);
cacheRouter["delete"]('/cache-keys', removeAllKeys);
var _default = cacheRouter;
exports["default"] = _default;
//# sourceMappingURL=cacheRouter.js.map