"use strict";

var _RemoteLogger = _interopRequireDefault(require("./remote-logger/RemoteLogger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function rlgc() {
  console.log("starting remote-logger-g-cell.");
  let remoteLogger = new _RemoteLogger.default();
  remoteLogger.wrapConsole();
  remoteLogger.test();
  return this;
})();