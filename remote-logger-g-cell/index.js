'use strict';
const rlgc = require("./remote-logger-g-cell-client/bundle/rlgcc.bundle.js");
console.log("imported rlgc into remote-logger-g-cell/index.js", rlgc);
var RLGC = rlgc.rlgc.default;
module.exports = RLGC;
