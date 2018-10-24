import React, {Component} from 'react';
import './App.css';
import * as rlgc from "remote-logger-g-cell";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>test - 1</h1>
                <button onClick={() => {
                    console.debug("test-debug", {ts: +new Date()});
                    console.info("test-info", {ts: +new Date()});
                    console.log("test-log", {ts: +new Date()});
                    console.warn("test-warn", {ts: +new Date()});
                    console.error("test-error", {ts: +new Date()});
                }}>
                    test all
                </button>
            </div>
        );
    }
}

export default App;
