import Loader from "./loader/Loader";

(function rlgc(){
    console.log("starting remote-logger-g-cell.");

    let loader = new Loader();
    loader.load();
    return this;
})();