"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _utils = _interopRequireDefault(require("../utils/utils"));

var _cacheService = _interopRequireDefault(require("../services/cacheService"));

var _generateRandomCache = _interopRequireDefault(require("../utils/generateRandomCache"));

/* eslint-disable array-callback-return */
var util = new _utils["default"]();

var cacheController =
/*#__PURE__*/
function () {
  function cacheController() {
    (0, _classCallCheck2["default"])(this, cacheController);
  }

  (0, _createClass2["default"])(cacheController, null, [{
    key: "createCache",

    /**
       * @param  {object} req
       * * @param  {object} res
       * @returns {Promise}
       * @description Creates a new cache
       */
    value: function () {
      var _createCache = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var key, cacheData, cache;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                key = req.body.key;

                if (!key) {
                  util.setError(401, 'Please provide a key for the cache.');
                  util.send(res);
                }

                cacheData = {
                  content: (0, _generateRandomCache["default"])(),
                  key: key
                };
                _context.prev = 3;
                _context.next = 6;
                return _cacheService["default"].createCache(cacheData);

              case 6:
                cache = _context.sent;
                util.setSuccess(201, 'Cache successfully created', cache);
                return _context.abrupt("return", util.send(res));

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                util.setError(400, _context.t0.message);
                return _context.abrupt("return", util.send(res));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 11]]);
      }));

      function createCache(_x, _x2) {
        return _createCache.apply(this, arguments);
      }

      return createCache;
    }()
    /**
       * @param  {object} req
       * * @param  {object} res
       * @returns {Promise}
       * @description Get cached data given the key
       */

  }, {
    key: "getKeyCache",
    value: function () {
      var _getKeyCache = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var key, cacheToFind, cache, createdCache;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                key = req.params.key;

                if (key) {
                  _context2.next = 4;
                  break;
                }

                util.setError(401, 'A key is required.');
                return _context2.abrupt("return", util.send(res));

              case 4:
                _context2.prev = 4;
                _context2.next = 7;
                return _cacheService["default"].findCacheByKey(key);

              case 7:
                cacheToFind = _context2.sent;

                if (cacheToFind) {
                  _context2.next = 15;
                  break;
                }

                cache = {
                  content: (0, _generateRandomCache["default"])(),
                  key: key
                };
                _context2.next = 12;
                return _cacheService["default"].createCache(cache);

              case 12:
                createdCache = _context2.sent;
                util.setSuccess(200, 'Cache miss', {
                  content: createdCache.content
                });
                return _context2.abrupt("return", util.send(res));

              case 15:
                util.setSuccess(200, 'Cache hit', cacheToFind);
                return _context2.abrupt("return", util.send(res));

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2["catch"](4);
                util.setError(400, _context2.t0.message);
                return _context2.abrupt("return", util.send(res));

              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 19]]);
      }));

      function getKeyCache(_x3, _x4) {
        return _getKeyCache.apply(this, arguments);
      }

      return getKeyCache;
    }()
  }, {
    key: "findAllKeysInCache",
    value: function () {
      var _findAllKeysInCache = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var cache, cacheKeys;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _cacheService["default"].findAllKeysInCache();

              case 3:
                cache = _context3.sent;
                cacheKeys = [];

                if (!(cache.length > 0)) {
                  _context3.next = 9;
                  break;
                }

                cache.map(function (item) {
                  cacheKeys.push(item.key);
                });
                util.setSuccess(200, 'Cache keys', cacheKeys);
                return _context3.abrupt("return", util.send(res));

              case 9:
                util.setSuccess(200, 'No cache keys found.', []);
                return _context3.abrupt("return", util.send(res));

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](0);
                util.setError(400, _context3.t0.message);
                return _context3.abrupt("return", util.send(res));

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 13]]);
      }));

      function findAllKeysInCache(_x5, _x6) {
        return _findAllKeysInCache.apply(this, arguments);
      }

      return findAllKeysInCache;
    }()
  }, {
    key: "removeKeyFromCache",
    value: function () {
      var _removeKeyFromCache = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        var key;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                key = req.params.key;

                if (key) {
                  _context4.next = 4;
                  break;
                }

                util.setError(400, 'Provide the key');
                return _context4.abrupt("return", util.send(res));

              case 4:
                _context4.prev = 4;
                _context4.next = 7;
                return _cacheService["default"].removeKeyFromCache(key);

              case 7:
                util.setSuccess(200, 'Key successfully removed');
                return _context4.abrupt("return", util.send(res));

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](4);
                util.setError(400, _context4.t0.message);
                return _context4.abrupt("return", util.send(res));

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[4, 11]]);
      }));

      function removeKeyFromCache(_x7, _x8) {
        return _removeKeyFromCache.apply(this, arguments);
      }

      return removeKeyFromCache;
    }()
  }, {
    key: "removeAllKeys",
    value: function () {
      var _removeAllKeys = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, res) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _cacheService["default"].removeAllKeysFromCache();

              case 3:
                util.setSuccess(200, 'All Keys successfully removed');
                return _context5.abrupt("return", util.send(res));

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                util.setError(400, _context5.t0.message);
                return _context5.abrupt("return", util.send(res));

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 7]]);
      }));

      function removeAllKeys(_x9, _x10) {
        return _removeAllKeys.apply(this, arguments);
      }

      return removeAllKeys;
    }()
  }]);
  return cacheController;
}();

exports["default"] = cacheController;
//# sourceMappingURL=cacheController.js.map