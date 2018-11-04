"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RemoteLogger = _interopRequireDefault(require("./remote-logger/RemoteLogger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Main {
  constructor() {}

  init(host, port) {
    console.log("initializing RLGC.");
    let remoteLogger = new _RemoteLogger.default();
    remoteLogger.setSocket(host, port);
    remoteLogger.wrapConsole();
  }

}

exports.default = Main;