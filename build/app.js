"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

require('./database');

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.get('/', function (req, res) {
  res.send({
    message: 'Welcome to Fashion Cloud Cache-API'
  });
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=app.js.map