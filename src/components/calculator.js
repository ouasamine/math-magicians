import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    return (
      <div className="calc-container">
        <div className="result-preview">{ this.state.result }</div>
        <div className="calc-cell">AC</div>
        <div className="calc-cell">+/-</div>
        <div className="calc-cell">%</div>
        <div className="calc-cell orange-bg">÷</div>
        <div className="calc-cell">7</div>
        <div className="calc-cell">8</div>
        <div className="calc-cell">9</div>
        <div className="calc-cell orange-bg">x</div>
        <div className="calc-cell">4</div>
        <div className="calc-cell">5</div>
        <div className="calc-cell">6</div>
        <div className="calc-cell orange-bg">-</div>
        <div className="calc-cell">1</div>
        <div className="calc-cell">2</div>
        <div className="calc-cell">3</div>
        <div className="calc-cell orange-bg">+</div>
        <div className="calc-cell-2">0</div>
        <div className="calc-cell">.</div>
        <div className="calc-cell orange-bg">=</div>
      </div>
    );
  }
}

export default Calculator;
