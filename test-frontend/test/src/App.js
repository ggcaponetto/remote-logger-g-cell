import React, {Component} from 'react';
import './App.css';
import RLGC from "rlgc-client";
let rlgc = new RLGC();
rlgc.init("http://localhost", process.env.SOCKET_PORT);

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Test App</h1>
                <h2>Press the button to invoke some console functions and see them pop up on the rlgc user interface.</h2>
                <button onClick={() => {
                    console.debug("test-debug", {ts: +new Date()});
                    console.info("test-info", {ts: +new Date()});
                    console.log("test-log", {ts: +new Date()});
                    console.warn("test-warn", {ts: +new Date()});
                    console.error("test-error", {ts: +new Date()});
                }}>
                    Test
                </button>
            </div>
        );
    }
}

export default App;
