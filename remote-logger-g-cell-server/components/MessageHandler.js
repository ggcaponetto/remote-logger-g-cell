export default class MessageHandler{
    constructor(){

    }
    toConsole(message){
        try {
            let parsedMessage = JSON.parse(message);
            let consoleProperty = parsedMessage.consoleProperty;
            let arguments = parsedMessage.arguments;
            console[consoleProperty](...arguments);
        }catch (e) {
            console.warn(e.message);
        }
    }
}