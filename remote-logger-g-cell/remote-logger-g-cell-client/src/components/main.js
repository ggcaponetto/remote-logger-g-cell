import RemoteLogger from "./remote-logger/RemoteLogger";


export default class Main{
    constructor(){}
    init(host, port){
        console.log("initializing RLGC.");
        let remoteLogger = new RemoteLogger();
        remoteLogger.setSocket(host, port);
        remoteLogger.wrapConsole();
    }
}