"use strict";

require("babel-register");

const rlgc = require("./components/main.js");

console.log("imported rlgc into src/index.js", rlgc);
module.exports = {
  rlgc: rlgc
};