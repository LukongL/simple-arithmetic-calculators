import React, { useState, useRef } from "react";
import Display from "./Display";
import Input from "./Input";
import Button from "./Button";
import "./App.css";

function Calculator() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  const operations = {
    plus: () => setResult(result + Number(inputRef.current.value)),
    minus: () => setResult(result - Number(inputRef.current.value)),
    times: () => setResult(result * Number(inputRef.current.value)),
    divide: () => setResult(result / Number(inputRef.current.value)),
    resetInput: () => { inputRef.current.value = ""; },
    resetResult: () => setResult(0),
  };

  return (
    <div className="Calculator">
      <h1>Simplest Working Calculator</h1>
      <Display result={result} />
      <Input ref={inputRef} />
      <div className="buttons">
        <Button onClick={operations.plus} label="add" />
        <Button onClick={operations.minus} label="subtract" />
        <Button onClick={operations.times} label="multiply" />
        <Button onClick={operations.divide} label="divide" />
        <Button onClick={operations.resetInput} label="reset input" />
        <Button onClick={operations.resetResult} label="reset result" />
      </div>
    </div>
  );
}

export default Calculator;
