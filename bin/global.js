#!/usr/bin/env node
'use strict';

printArgs();
var mode = getArgsValue("--mode");
var wsPort = getArgsValue("--ws-port");
var consoleAppPort = getArgsValue("--console-app-port");
var consoleWSPort = getArgsValue("--console-ws-port");


var isWin = process.platform === "win32";
console.log("you are runnung on windows: " + isWin);
console.log("you are runnung with args: ", {mode: mode, wsPort, consoleWSPort, consoleAppPort});

function setEnvsAndRunScript(nodeArgs) {
    var spawn = require('child_process').spawn;

    var child = spawn(isWin ? "node.exe" : "node", nodeArgs);

    child.stdout.on('data', function (data) {
        process.stdout.write(data);
    });

    child.stderr.on('data', function (data) {
        process.stdout.write(data);
    });

    child.on('exit', function (data) {
        process.stdout.write('done.');
    });
}

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

switch (mode) {
    case "server":
        setEnvsAndRunScript(
            [
                "./node_modules/cross-env/dist/bin/cross-env-shell.js",
                "RLGC_WS_PORT=" + wsPort,
                "RLGC_UI_PORT=" + consoleWSPort,
                "npm run rlgc-server"
            ]
        );
        break;
    case "ui":
        setEnvsAndRunScript(
            [
                "./node_modules/cross-env/dist/bin/cross-env-shell.js",
                "PORT=" + consoleAppPort,
                "SOCKET_PORT=" + consoleWSPort,
                "npm run rlgc-ui"
            ]
        );
        break;
    case "test-app":
        setEnvsAndRunScript(
            [
                "./node_modules/cross-env/dist/bin/cross-env-shell.js",
                "PORT=" + consoleAppPort,
                "SOCKET_PORT=" + consoleWSPort,
                "npm run rlgc-test-app"
            ]
        );
        break;
    default:
        throw new Error("Invalid arguments calling 'rlgc'");
}