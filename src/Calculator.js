import React, { useState } from 'react';
import './Calculator.css';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    // Allow only valid characters (digits, operators, and decimal point)
    const validCharacters = /^[0-9+\-*/().]$/;
    if (validCharacters.test(value)) {
      setInput(input + value);
    }
  };
  

  const handleClear = () => {
    setInput("");
    setResult(0);
  };

 

  const handleCalculate = () => {
    try {
      setResult(evaluate(input));
    } catch (error) {
      setResult("Error");
    }
  };
  
  
  

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={handleCalculate}>=</button>
      </div>
      <div className="result" style={{ color: result.includes("Error") ? "red" : "black" }}>
  {result}
</div>
    </div>          
  );
};

export default Calculator;
