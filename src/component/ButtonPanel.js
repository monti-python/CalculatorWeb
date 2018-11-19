import Button from './Button';
import React from 'react';
import PropTypes from 'prop-types';

import './ButtonPanel.css';

class ButtonPanel extends React.Component {
    handleClick = (primary, secondary) => {
        this.props.clickHandler(primary, secondary);
    };

    // 🠕 🠗 🠖 / 🠩 🠫 🠪 / x² / √4  / ÷ / ! / 𝑥 / √𝑥̅  / 𝑥² / 𝒚ˣ

    render() {
        return (
            <div className="panel-component">
                <div>
                    <Button primary="CPT" secondary="QUIT" clickHandler={this.handleClick}/>
                    <Button primary="ENTER" secondary="SET" clickHandler={this.handleClick}/>
                    <Button primary="ARROWUP" secondary="DEL" clickHandler={this.handleClick}/>
                    <Button primary="ARROWDOWN" secondary="INS" clickHandler={this.handleClick}/>
                    <Button primary="OFF" clickHandler={this.handleClick}/>
                </div>
                <div>
                    <Button primary="SHIFT" clickHandler={this.handleClick}/>
                    <Button primary="CF" clickHandler={this.handleClick}/>
                    <Button primary="NPV" clickHandler={this.handleClick}/>
                    <Button primary="IRR" clickHandler={this.handleClick}/>
                    <Button primary="ARROWRIGHT" clickHandler={this.handleClick}/>
                </div>
                <div>
                    <Button primary="PERIODS" secondary="PMTYEAR" clickHandler={this.handleClick}/>
                    <Button primary="YIELD" secondary="PERIODSYEAR" clickHandler={this.handleClick}/>
                    <Button primary="PV" secondary="AMORT" clickHandler={this.handleClick}/>
                    <Button primary="PMT" secondary="BGN" clickHandler={this.handleClick}/>
                    <Button primary="FV" secondary="CLRTVM" clickHandler={this.handleClick}/>
                </div>
                <div>
                    <Button primary="MOD" secondary="K" clickHandler={this.handleClick}/>
                    <Button primary="SQRT" clickHandler={this.handleClick}/>
                    <Button primary="SQ" clickHandler={this.handleClick}/>
                    <Button primary="INV" clickHandler={this.handleClick}/>
                    <Button primary="DIV" secondary="RAND" clickHandler={this.handleClick}/>
                </div>
                <div>
                    <Button primary="INVTRG" secondary="HYPTRG" clickHandler={this.handleClick}/>
                    <Button primary="(" secondary="SIN" clickHandler={this.handleClick}/>
                    <Button primary=")" secondary="COS" clickHandler={this.handleClick}/>
                    <Button primary="POW" secondary="TAN" clickHandler={this.handleClick}/>
                    <Button primary="PRD" secondary="FACT" clickHandler={this.handleClick}/>
                </div>
                <div>
                    <Button primary="LOG" secondary="EXP" clickHandler={this.handleClick}/>
                    <Button primary="7" secondary="DATA" clickHandler={this.handleClick}/>
                    <Button primary="8" secondary="STAT" clickHandler={this.handleClick}/>
                    <Button primary="9" secondary="BOND" clickHandler={this.handleClick}/>
                    <Button primary="SUB" secondary="PERM" clickHandler={this.handleClick}/>
                </div>
                <div>
                    <Button primary="STO" secondary="ROUND" clickHandler={this.handleClick}/>
                    <Button primary="4" secondary="DEPR" clickHandler={this.handleClick}/>
                    <Button primary="5" secondary="DELTA" clickHandler={this.handleClick}/>
                    <Button primary="6" secondary="BRKEVN" clickHandler={this.handleClick}/>
                    <Button primary="SUM" secondary="COMB" clickHandler={this.handleClick}/>
                </div>
                <div>
                    <Button primary="RCL" clickHandler={this.handleClick}/>
                    <Button primary="1" secondary="DATE" clickHandler={this.handleClick}/>
                    <Button primary="2" secondary="ICONV" clickHandler={this.handleClick}/>
                    <Button primary="3" secondary="PROFIT" clickHandler={this.handleClick}/>
                    <Button primary="EQ" secondary="ANS" clickHandler={this.handleClick} big/>
                </div>
                <div>
                    <Button primary="CLR" secondary="CLRWRK" clickHandler={this.handleClick}/>
                    <Button primary="0" secondary="MEM" clickHandler={this.handleClick}/>
                    <Button primary="." secondary="FORMAT" clickHandler={this.handleClick}/>
                    <Button primary="OPP" secondary="RESET" clickHandler={this.handleClick}/>
                </div>
            </div>
        );
    }
}

ButtonPanel.propTypes = {
    clickHandler: PropTypes.func,
};
export default ButtonPanel;
