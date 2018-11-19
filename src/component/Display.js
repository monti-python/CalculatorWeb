import React from 'react';
import PropTypes from 'prop-types';

import './Display.css';

class Display extends React.Component {
    render() {
        return (
            <div className="component-display">
                <div className="display-flags">
                    <span className={this.props.flags['2nd'] ? "visible": ""}>2nd</span>
                    <span>INV</span>
                    <span>HYP</span>
                    <span>COMPUTE</span>
                    <span>ENTER</span>
                    <span>SET</span>
                    <span>⮁</span>
                    <span>DEL</span>
                    <span>INS</span>
                    <span>BGN</span>
                    <span>RAD</span>
                    <span>◁</span>
                    <span>*</span>
                </div>
                <div className="display-main">
                    <div className="display-frame">{this.props.frame}</div>
                    <div className="display-value">{this.props.value}</div>
                </div>
            </div>
        );
    }
}

Display.propTypes = {
    frame: PropTypes.string,
    value: PropTypes.string,
};
export default Display;
