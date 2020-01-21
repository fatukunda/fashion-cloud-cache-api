"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

require("chai/register-should");

var _app = _interopRequireDefault(require("../app"));

var _testData = require("./testData");

/* eslint-disable no-undef */
_chai["default"].use(_chaiHttp["default"]);

var expect = _chai["default"].expect;
var cacheUrl = '/cache';
describe('Test the Cache endpoints', function () {
  it('Should create a new cache', function (done) {
    var key = _testData.validCache.key;

    _chai["default"].request(_app["default"]).post(cacheUrl).set('Accept', 'application/json').send(_testData.validCache).end(function (err, res) {
      expect(res.status).to.equal(201);
      expect(res.body.data).to.include({
        key: key
      });
      done();
    });
  });
});
//# sourceMappingURL=cache.test.js.map