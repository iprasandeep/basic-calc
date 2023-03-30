import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    setResult(result?.concat(event.target.value));
  };
  const clearDisplay = () => {
    setResult("");
  };
  const calculate = () => {
    setResult(eval(result));
  };

  return (
    <div className="calc">
      <input type="text" placeholder="0" id="answer" value={result} />
      <input type="button" value="9" className="btn" onClick={clickHandler} />
      <input type="button" value="8" className="btn" onClick={clickHandler} />
      <input type="button" value="7" className="btn" onClick={clickHandler} />
      <input type="button" value="6" className="btn" onClick={clickHandler} />
      <input type="button" value="5" className="btn" onClick={clickHandler} />
      <input type="button" value="4" className="btn" onClick={clickHandler} />
      <input type="button" value="3" className="btn" onClick={clickHandler} />
      <input type="button" value="2" className="btn" onClick={clickHandler} />
      <input type="button" value="1" className="btn" onClick={clickHandler} />
      <input type="button" value="0" className="btn" onClick={clickHandler} />
      <input type="button" value="." className="btn" onClick={clickHandler} />
      <input type="button" value="+" className="btn" onClick={clickHandler} />
      <input type="button" value="-" className="btn" onClick={clickHandler} />
      <input type="button" value="*" className="btn" onClick={clickHandler} />
      <input type="button" value="/" className="btn" onClick={clickHandler} />
      <input type="button" value="%" className="btn" onClick={clickHandler} />
      <input
        type="button"
        value="Clear"
        className="btn-1"
        onClick={clearDisplay}
      />
      <input type="button" value="=" className="btn-1" onClick={calculate} />
    </div>
  );
}
