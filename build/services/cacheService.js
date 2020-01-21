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

var _Cache = _interopRequireDefault(require("../models/Cache"));

/* eslint-disable no-useless-catch */
var CacheService =
/*#__PURE__*/
function () {
  function CacheService() {
    (0, _classCallCheck2["default"])(this, CacheService);
  }

  (0, _createClass2["default"])(CacheService, null, [{
    key: "createCache",

    /**
       * @param  {object} cacheInfo
       * @returns {Promise}
       * @description Creates a new cache
       */
    value: function () {
      var _createCache = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(cacheInfo) {
        var cache;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                cache = new _Cache["default"](cacheInfo);
                _context.next = 4;
                return cache.save();

              case 4:
                return _context.abrupt("return", cache);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function createCache(_x) {
        return _createCache.apply(this, arguments);
      }

      return createCache;
    }()
    /**
       * @param  {object} key
       * @returns {Promise}
       * @description Return cached data of a given key
       */

  }, {
    key: "findCacheByKey",
    value: function () {
      var _findCacheByKey = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(key) {
        var cache;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _Cache["default"].findOne({
                  key: key
                }).exec();

              case 3:
                cache = _context2.sent;
                return _context2.abrupt("return", cache);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function findCacheByKey(_x2) {
        return _findCacheByKey.apply(this, arguments);
      }

      return findCacheByKey;
    }()
    /**
       * @returns {Promise}
       * @description Returns all keys in a cache
       */

  }, {
    key: "findAllKeysInCache",
    value: function () {
      var _findAllKeysInCache = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3() {
        var cache;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _Cache["default"].find({}).exec();

              case 3:
                cache = _context3.sent;
                return _context3.abrupt("return", cache);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                throw _context3.t0;

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function findAllKeysInCache() {
        return _findAllKeysInCache.apply(this, arguments);
      }

      return findAllKeysInCache;
    }()
    /**
       * @param  {string} cacheInfo
       * @returns {Promise}
       * @description Removes a given key from the cache
       */

  }, {
    key: "removeKeyFromCache",
    value: function () {
      var _removeKeyFromCache = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(key) {
        var cache;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _Cache["default"].find({
                  key: key
                });

              case 3:
                cache = _context4.sent;

                if (!cache) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 7;
                return _Cache["default"].deleteMany({
                  key: key
                }).exec();

              case 7:
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);
                throw _context4.t0;

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 9]]);
      }));

      function removeKeyFromCache(_x3) {
        return _removeKeyFromCache.apply(this, arguments);
      }

      return removeKeyFromCache;
    }()
    /**
       * @returns {Promise}
       * @description Removes all keys from cache
       */

  }, {
    key: "removeAllKeysFromCache",
    value: function () {
      var _removeAllKeysFromCache = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5() {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _Cache["default"].deleteMany({}).exec();

              case 3:
                _context5.next = 8;
                break;

              case 5:
                _context5.prev = 5;
                _context5.t0 = _context5["catch"](0);
                throw _context5.t0;

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 5]]);
      }));

      function removeAllKeysFromCache() {
        return _removeAllKeysFromCache.apply(this, arguments);
      }

      return removeAllKeysFromCache;
    }()
  }]);
  return CacheService;
}();

var _default = CacheService;
exports["default"] = _default;
//# sourceMappingURL=cacheService.js.map