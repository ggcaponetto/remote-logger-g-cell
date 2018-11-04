[![CircleCI](https://circleci.com/gh/ggcaponetto/remote-logger-g-cell.svg?style=svg)](https://circleci.com/gh/ggcaponetto/remote-logger-g-cell)

## remote-logger-g-cell

This is a JavaScript remote logger. It enables you to read logs from a webapp running on any device such as smartphones
and read the console logs in the browser, with minimal setup.

### Getting started

Install the client library.

``npm install remote-logger-g-cell``

In your webapp import the client library.

``
let rlgc = new RLGC();  
rlgc.init("http://localhost", 5000);
``

The port used must match __--ws-port__ when running ``rlgc --mode server --ws-port 5000 --console-ws-port 4000``, just 
like in the example above.

### Start the server on a given ports

The following command will start a express server listening on port __--ws-port__ for messages sent by
the client rlgc app. The port __--ui-port__ will be used to forward the messages to the user interface.

``rlgc --mode server --ws-port 5000 --console-ws-port 4000``

### Start the user interface on a given port

The following command will start a react app on port __--console-app-port__ and display messages sent from the rlgc
 server app. The port __--console-ws-port__ will be used to transport the messages from the server to the user interface.
The port __--console-ws-port__ must also match the __--ui-port__.

``rlgc --mode ui --console-app-port 4005 --console-ws-port 4000``

Now you can open [http://localhost:4005/](http://localhost:4005/) and see your logs.

### Test app

The following command will start a react app on port __--console-app-port__ 

``rlgc --mode test-app --console-app-port 3005 --console-ws-port 5000``

Now you can open [http://localhost:3005/](http://localhost:3005/) and click the test button. The console logs will also 
be displayed on [http://localhost:4005/](http://localhost:4005/).