import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

import Calculator from 'cfa_calculator';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calculator: new Calculator(),
            shift: false  // store 'shift' the React component as determines the button type to the app
        };
    }

    handleClick = (primary, secondary) => {
        let buttonName = this.state.shift ? secondary : primary;
        let calculator = this.state.calculator;
        console.log("(debug: shift " + (this.state.shift ? "on": "off") + ')');
        console.log("(debug: primary " + primary + ')');
        console.log("(debug: secondary " + secondary + ')');
        console.log("token: " + buttonName);
        calculator.input(buttonName);

        this.setState({calculator: calculator, shift: primary === "SHIFT"});
    };

    render() {
        return (
            <div className="component-app">
                <Display flags={{"2nd": true}} // this.state.calculator.flags
                    value={this.state.calculator.output()}
                    frame={this.state.calculator.frame()}
                />
                <ButtonPanel
                    clickHandler={this.handleClick}
                />
            </div>
        );
    }
}

export default App;
