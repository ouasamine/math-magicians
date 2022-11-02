import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Header from './Header';

function Calculator() {
  const [state, setState] = useState({ total: 0 });
  function btnClick(e) {
    setState((state) => calculate(state, e.target.innerText));
  }

  const { total, next, operation } = state;
  return (
    <>
      <Header />
      <div className="calc-container">
        <div className="result-preview">
          { total }
          { operation }
          { next }
        </div>
        <button type="button" className="calc-cell" onClick={btnClick}>AC</button>
        <button type="button" className="calc-cell" onClick={btnClick}>+/-</button>
        <button type="button" className="calc-cell" onClick={btnClick}>%</button>
        <button type="button" className="calc-cell orange-bg" onClick={btnClick}>÷</button>
        <button type="button" className="calc-cell" onClick={btnClick}>7</button>
        <button type="button" className="calc-cell" onClick={btnClick}>8</button>
        <button type="button" className="calc-cell" onClick={btnClick}>9</button>
        <button type="button" className="calc-cell orange-bg" onClick={btnClick}>x</button>
        <button type="button" className="calc-cell" onClick={btnClick}>4</button>
        <button type="button" className="calc-cell" onClick={btnClick}>5</button>
        <button type="button" className="calc-cell" onClick={btnClick}>6</button>
        <button type="button" className="calc-cell orange-bg" onClick={btnClick}>-</button>
        <button type="button" className="calc-cell" onClick={btnClick}>1</button>
        <button type="button" className="calc-cell" onClick={btnClick}>2</button>
        <button type="button" className="calc-cell" onClick={btnClick}>3</button>
        <button type="button" className="calc-cell orange-bg" onClick={btnClick}>+</button>
        <button type="button" className="calc-cell-2" onClick={btnClick}>0</button>
        <button type="button" className="calc-cell" onClick={btnClick}>.</button>
        <button type="button" className="calc-cell orange-bg" onClick={btnClick}>=</button>
      </div>
    </>
  );
}

export default Calculator;
