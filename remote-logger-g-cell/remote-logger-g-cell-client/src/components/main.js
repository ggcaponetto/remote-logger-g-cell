import RemoteLogger from "./remote-logger/RemoteLogger";


export default class Main{
    constructor(){
        console.log("Main constructed.");
    }
    init(host, port){
        console.log("initializing remote-logger-g-cell.");
        let remoteLogger = new RemoteLogger();
        remoteLogger.setSocket(host, port);
        remoteLogger.wrapConsole();
        remoteLogger.test();
    }
}