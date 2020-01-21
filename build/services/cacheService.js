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
  }]);
  return CacheService;
}();

var _default = CacheService;
exports["default"] = _default;
//# sourceMappingURL=cacheService.js.map