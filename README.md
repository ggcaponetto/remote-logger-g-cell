[![CircleCI](https://circleci.com/gh/ggcaponetto/remote-logger-g-cell.svg?style=svg)](https://circleci.com/gh/ggcaponetto/remote-logger-g-cell)

# remote-logger-g-cell (DO NOT USE IT NOW, IT'S IN DEVELOPMENT)

This is a JavaScript remote logger. It enables you to read logs from a webapp running on any device such as smartphones
and read the console logs in the browser, with minimal setup. Check out [vorlonjs.io](http://www.vorlonjs.io/)
if you need something fancier.

## getting started

Install the client library.

``npm install remote-logger-g-cell``

In your webapp import the client library.

``import * as rlgc from "remote-logger-g-cell";``

### start the server on a given ports

``rlgc --mode server --ws-port 5000 --ui-port 3000``

### start the console on a given port

``rlgc --mode ui --ui-port 3333``

Now you can open [http://localhost:3334/](http://localhost:3334/) and see your logs.