export default class Loader{
    constructor(){
        this.properties = [];
    }

    load(){
        let thisRef = this;
        let consoleRef = console;
        console.info("proxying all calls from console to the remote server.");
        for(let property in console){
            if(
                console.hasOwnProperty(property) &&
                typeof console[property] === "function"
            ){
                console.info(`proxy setup for console.${property}`);
                this.properties.push(`${property}`);
                console[property].bind(consoleRef);
            }
        }

        console["info"]("proxying all calls from console to the remote server.", {console, properties: this.properties});

        this.properties.forEach((property) => {
            let consoleFunction = consoleRef[property];
            // Redefine console.log method with a custom function
            consoleRef[property] = function () {
                thisRef.toRemote(consoleFunction, ["proxy", {t:"test"}]);
                /**
                 Note: If you want to preserve the same action as the original method does
                 then use the following line :

                 we use apply to invoke the method on console using the original arguments.
                 Simply calling consoleFunction(message) would fail because LOG depends on the console
                 */
                consoleFunction.apply(consoleRef, arguments);
            };
        });
    }

    toRemote(consoleFunction, args){
        consoleFunction.apply(console, args);
    }

    test(){
        console.info("this is a test log", {test:"test string"});
    }
}