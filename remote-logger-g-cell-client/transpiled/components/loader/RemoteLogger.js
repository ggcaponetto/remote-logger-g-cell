"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

var _socket = _interopRequireDefault(require("socket.io-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const socket = (0, _socket.default)('http://localhost');

class RemoteLogger {
  constructor() {
    /* the properties of the console object that we are going to intercept */
    this.properties = [];
  }

  wrapConsole() {
    let thisRef = this;
    let consoleRef = console;
    console.info("proxying all calls from console to the remote server.");

    for (let property in console) {
      if (console.hasOwnProperty(property) && typeof console[property] === "function") {
        console.info(`proxy setup for console.${property}`);
        this.properties.push(`${property}`);
        console[property].bind(consoleRef);
      }
    }

    console["info"]("proxying all calls from console to the remote server.", {
      console,
      properties: this.properties
    });
    this.properties.forEach(property => {
      let consoleFunction = consoleRef[property];
      /* Redefine console.log method with a custom function */

      consoleRef[property] = function () {
        thisRef.toRemote(consoleFunction, ["proxy", {
          t: "test"
        }]);
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

  toRemote(consoleFunction, args) {
    consoleFunction.apply(console, args);
  }

  test() {
    console.info("this is a test log", {
      test: "test string"
    });
  }

}

exports.default = RemoteLogger;