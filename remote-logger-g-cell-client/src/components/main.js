import RemoteLogger from "./remote-logger/RemoteLogger";

(function rlgc(){
    console.log("starting remote-logger-g-cell.");

    let remoteLogger = new RemoteLogger();
    remoteLogger.wrapConsole();
    remoteLogger.test();
    return this;
})();