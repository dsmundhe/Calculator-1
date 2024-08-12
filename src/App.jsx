import "./App.css";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  function handleButton(value) {
    try {
      if (value === "C") {
        setInput("");
      } else if (value === "<") {
        setInput(input.slice(0, -1));
      } else if (value === "=") {
        setInput(eval(input).toString());
      } else {
        setInput((val) => (val += value));
      }
    } catch (error) {
      setInput("Error!");
    }
  }
  return (
    <>
      <div className="container">
        <h1>{input}</h1>
        <div>
          <button onClick={() => handleButton("C")}>C</button>
          <button onClick={() => handleButton("<")}>&lt;</button>
          <button onClick={() => handleButton("%")}>%</button>
          <button onClick={() => handleButton("/")}>/</button>
        </div>
        <div>
          <button onClick={() => handleButton("7")}>7</button>
          <button onClick={() => handleButton("8")}>8 </button>
          <button onClick={() => handleButton("9")}>9</button>
          <button onClick={() => handleButton("*")}>*</button>
        </div>
        <div>
          <button onClick={() => handleButton("4")}>4</button>
          <button onClick={() => handleButton("5")}>5</button>
          <button onClick={() => handleButton("6")}>6</button>
          <button onClick={() => handleButton("-")}>-</button>
        </div>
        <div>
          <button onClick={() => handleButton("1")}>1</button>
          <button onClick={() => handleButton("2")}>2</button>
          <button onClick={() => handleButton("3")}>3</button>
          <button onClick={() => handleButton("+")}>+</button>
        </div>
        <div>
          <button onClick={() => handleButton("0")}>0</button>
          <button onClick={() => handleButton("00")}>00</button>
          <button onClick={() => handleButton(".")}>.</button>
          <button onClick={() => handleButton("=")}>=</button>
        </div>
      </div>
    </>
  );
}

export default App;
