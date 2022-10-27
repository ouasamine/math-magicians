import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
    this.btnClick = this.btnClick.bind(this);
  }

  btnClick(event) {
    this.setState((state) => calculate(state, event.target.innerText));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calc-container">
        <div className="result-preview">
          { total }
          { operation }
          { next }
        </div>
        <button type="button" className="calc-cell" onClick={this.btnClick}>AC</button>
        <button type="button" className="calc-cell" onClick={this.btnClick}>+/-</button>
        <button type="button" className="calc-cell" onClick={this.btnClick}>%</button>
        <button type="button" className="calc-cell orange-bg" onClick={this.btnClick}>÷</button>
        <button type="button" className="calc-cell" onClick={this.btnClick}>7</button>
        <button type="button" className="calc-cell" onClick={this.btnClick}>8</button>
        <button type="button" className="calc-cell" onClick={this.btnClick}>9</button>
        <button type="button" className="calc-cell orange-bg" onClick={this.btnClick}>x</button>
        <button type="button" className="calc-cell" onClick={this.btnClick}>4</button>
        <button type="button" className="calc-cell" onClick={this.btnClick}>5</button>
        <button type="button" className="calc-cell" onClick={this.btnClick}>6</button>
        <button type="button" className="calc-cell orange-bg" onClick={this.btnClick}>-</button>
        <button type="button" className="calc-cell" onClick={this.btnClick}>1</button>
        <button type="button" className="calc-cell" onClick={this.btnClick}>2</button>
        <button type="button" className="calc-cell" onClick={this.btnClick}>3</button>
        <button type="button" className="calc-cell orange-bg" onClick={this.btnClick}>+</button>
        <button type="button" className="calc-cell-2" onClick={this.btnClick}>0</button>
        <button type="button" className="calc-cell" onClick={this.btnClick}>.</button>
        <button type="button" className="calc-cell orange-bg" onClick={this.btnClick}>=</button>
      </div>
    );
  }
}

export default Calculator;
