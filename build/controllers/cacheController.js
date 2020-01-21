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
  }]);
  return cacheController;
}();

exports["default"] = cacheController;
//# sourceMappingURL=cacheController.js.map