#!/usr/bin/env node
'use strict';

printArgs();
var mode = getArgsValue("--mode");
var port = getArgsValue("--port");


var isWin = process.platform === "win32";
console.log("you are runnung on windows: " + isWin);
console.log("you are runnung with args: ", {mode: mode, port: port});

var spawn = require('child_process').spawn;

var child = spawn(isWin ? "npm.cmd" : "npm", ["run", "rlgc-server"]);

child.stdout.on('data', function (data) {
    process.stdout.write(data);
});

child.stderr.on('data', function (data) {
    process.stdout.write(data);
});

child.on('exit', function (data) {
    process.stdout.write('done.');
});

function printArgs() {
    // print process.argv
    process.argv.forEach(function (val, index, array) {
        console.log(index + ': ' + val);
    });
}

function getArgsValue(arg) {
    if (process.argv.indexOf(arg) !== -1) {
        return process.argv[process.argv.indexOf(arg) + 1]
    }
}