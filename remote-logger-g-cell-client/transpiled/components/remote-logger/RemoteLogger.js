"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

var _socket = _interopRequireDefault(require("socket.io-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = 5000;
const HOST = `http://localhost`;
const socket = (0, _socket.default)(`${HOST}:${PORT}`);

class RemoteLogger {
  constructor() {
    /* the properties of the console object that we are going to intercept */
    this.properties = [];
    socket.on('connect', () => {
      console.info(`rlgcc connected via socket.io`);
    });
    socket.on('disconnect', () => {
      console.info(`rlgcc disconnected from socket.io`);
    });
  }

  wrapConsole() {
    let thisRef = this;
    let consoleRef = console;
    console.info("proxying all calls from console to the remote server.");

    for (let property in console) {
      if (console.hasOwnProperty(property) && typeof console[property] === "function") {
        // console.info(`proxy setup for console.${property}`);
        this.properties.push(`${property}`);
        console[property].bind(consoleRef);
      }
    }

    console["info"]("proxying all calls from console to the remote server.", {
      console,
      properties: this.properties
    });
    this.properties.forEach(consoleProperty => {
      let consoleFunction = consoleRef[consoleProperty];
      /* Redefine console.log method with a custom function */

      consoleRef[consoleProperty] = function () {
        thisRef.toRemote(consoleFunction, consoleProperty, arguments);
        /**
         Note: If you want to preserve the same action as the original method does
         then use the following line :
           we use apply to invoke the method on console using the original arguments.
         Simply calling consoleFunction(message) would fail because LOG depends on the console
         */

        consoleFunction.apply(consoleRef, arguments);
      };
    });
  }

  toRemote(consoleFunction, consoleProperty, args) {
    consoleFunction.apply(console, args);
    socket.emit('event', JSON.stringify({
      consoleProperty: consoleProperty,
      arguments: args
    }, null, 4));
  }

  test() {
    console.info("this is a test log.", {
      test: "test string"
    });
  }

}

exports.default = RemoteLogger;