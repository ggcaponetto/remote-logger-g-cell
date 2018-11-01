"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _RemoteLogger = _interopRequireDefault(require("./remote-logger/RemoteLogger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Main {
  constructor() {
    console.log("Main constructed.");
  }

  init(host, port) {
    console.log("initializing remote-logger-g-cell.");
    let remoteLogger = new _RemoteLogger.default();
    remoteLogger.setSocket(host, port);
    remoteLogger.wrapConsole();
    remoteLogger.test();
  }

}

exports.default = Main;