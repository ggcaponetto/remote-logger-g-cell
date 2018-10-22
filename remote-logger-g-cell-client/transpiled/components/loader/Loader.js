"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Loader {
  constructor() {
    this.properties = [];
  }

  load() {
    let thisRef = this;
    console.info("proxying all calls from console to the remote server.");

    for (let property in console) {
      if (console.hasOwnProperty(property) && typeof console[property] === "function") {
        console.info(`proxy setup for console.${property}`);
        this.properties.push(`${property}`);
      }
    }

    console["info"]("proxying all calls from console to the remote server.", {
      console,
      properties: this.properties
    });
    this.properties.forEach(property => {
      let p = Object.assign("", property);

      console[p] = () => {
        console.info(`proxyied console.${p}: `, _objectSpread({}, arguments)); // console[p](...arguments);
      };
    });
    this.test();
  }

  test() {
    console.info("this is a test log", {
      test: "test string"
    });
  }

}

exports.default = Loader;