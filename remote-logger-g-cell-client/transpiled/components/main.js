"use strict";

var _Loader = _interopRequireDefault(require("./loader/Loader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function rlgc() {
  console.log("starting remote-logger-g-cell.");
  let loader = new _Loader.default();
  loader.load();
  return this;
})();