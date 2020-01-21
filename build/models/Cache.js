"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var cacheSchema = _mongoose["default"].Schema({
  ttl: {
    type: Date,
    expires: '5000',
    "default": Date.now
  },
  content: {
    type: String
  },
  key: {
    type: String,
    trim: true
  }
}); // eslint-disable-next-line func-names


cacheSchema.pre('save', function (next) {
  // Create a new ttl everytime a cache is created or modified
  var cache = this;
  cache.ttl = new Date();
  next();
});

var Cache = _mongoose["default"].model('Cache', cacheSchema);

var _default = Cache;
exports["default"] = _default;
//# sourceMappingURL=Cache.js.map