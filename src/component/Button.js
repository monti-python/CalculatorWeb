import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import symbols from '../themes/default'

class Button extends React.Component {
    handleClick = () => {
        this.props.clickHandler(this.props.primary, this.props.secondary);
    };

    render() {

        const className = [
            "button-component",
            this.props.big ? "big" : "",
        ];
        const firstSymbol = symbols[this.props.primary] || this.props.primary;
        const secondSymbol = symbols[this.props.secondary] || this.props.secondary;

        return (
            <div className={className.join(" ").trim()}>
                <div> {secondSymbol} </div>
                <button onClick={this.handleClick}> {firstSymbol} </button>
            </div>
        );
    }
}

Button.propTypes = {
    primary: PropTypes.string,
    secondary: PropTypes.string,
    big: PropTypes.bool,
    clickHandler: PropTypes.func,
};
export default Button;
