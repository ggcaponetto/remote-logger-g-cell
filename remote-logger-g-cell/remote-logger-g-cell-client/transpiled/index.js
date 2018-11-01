"use strict";

var _main = _interopRequireDefault(require("./components/main.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("babel-register");

console.log("imported rlgc into src/index.js", _main.default);
module.exports = {
  rlgc: _main.default
};