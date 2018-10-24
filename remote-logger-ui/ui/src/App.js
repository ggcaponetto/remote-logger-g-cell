import React, { Component } from 'react';

const io = require('socket.io-client');

const PORT = 3000;
const HOST = `http://localhost:${PORT}`;
const socket = io(HOST);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lines: [],
        };
        socket.on('connect', () => {
            console.info(`rlgc ui connected via socket.io to host ${HOST}`);
        });
        socket.on('disconnect', () => {
            console.info(`rlgc ui disconnected from socket.io host ${HOST}`);
        });
    }

    componentDidMount(){
        let thisRef = this;
        socket.on('event', function(message){
            /* print out the message received from the client */
            try {
                thisRef.toConsole(message);
                thisRef.setLine(<div key={thisRef.state.lines.length}>{message}</div>)
            } catch (e) {
                console.warn(e.message);
            }
        });
    }

    toConsole(message){
        try {
            let parsedMessage = JSON.parse(message);
            let consoleProperty = parsedMessage.consoleProperty;
            let args = Object.assign({}, parsedMessage.args);
            // console.debug("toConsole", {consoleProperty, args, parsedMessage});
            let argsArray = [];
            for(let property in args){
                if(args.hasOwnProperty(property)){
                    argsArray.push(args[property]);
                }
            }
            console[consoleProperty](...argsArray);
        }catch (e) {
            console.warn("toConsole - error", {e, message});
        }
    }

    setLine(component) {
        this.setState((previousState) => {
            let newLines = this.state.lines.concat(component);
            return Object.assign({...previousState, lines: newLines});
        })
    }

    render() {
        return (
            <div className="App">
                <h5>events: {this.state.lines.length}</h5>
                {this.state.lines}
            </div>
        );
    }
}

export default App;
