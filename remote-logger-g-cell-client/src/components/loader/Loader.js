export default class Loader{
    constructor(){
        this.properties = [];
    }

    load(){
        let thisRef = this;
        console.info("proxying all calls from console to the remote server.");
        for(let property in console){
            if(
                console.hasOwnProperty(property) &&
                typeof console[property] === "function"
            ){
                console.info(`proxy setup for console.${property}`);
                this.properties.push(`${property}`);
            }
        }

        console["info"]("proxying all calls from console to the remote server.", {console, properties: this.properties});

        this.properties.forEach((property) => {
            let p = Object.assign("", property);
            console[p] = () => {
                console.info(`proxyied console.${p}: `, {...arguments});
                // console[p](...arguments);
            };
        });

        this.test();
    }


    test(){
        console.info("this is a test log", {test:"test string"});
    }
}