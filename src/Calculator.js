import React, { useState } from "react";
import {evaluate} from "mathjs"; // Importing the "evaluate" function from mathjs to safely evaluate math expressions.
import "./styles.css";

function Calculator() {
  const [input, setInput] = useState(""); // useState hook to manage the current input(what user types)
  const [result, setResult] = useState(""); // useState hook to store the result after evaluation 

  const handleClick = (value) => {
   
    if (value === "C") {
    // If the user presses "c", clear both input & result
      setInput("");
      setResult("");
    } else if (value === "=") {
        //when "=" is clicked, try to evaluate the expression
      try {
        if (input.trim() === "") {
            //If input is empty or just space, show error.
          setResult("Error");
        } else {
        //evaluate the expression using mathjs
          const evalResult = evaluate(input);
          setResult(String(evalResult)); // convert result to string and update the state
        }
      } catch (error){
        // If evaluation fails or invalid expression then show error.
        setResult("Error");
      }
    } else {
        // For numbers and operators, append the value to the input string
      setInput((prev) => prev + value);
    
    }
  };
//Array of calculator button labels
  const buttons = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "C",
    "0",
    "=",
    "/",
  ];

  return (
    <div className="calculator">
      <h1>React Calculator</h1>

      {/* Input Box */}
      <input type="text" value={input} readOnly className="input" />

      {/* Result below input */}

      <div style={{ marginTop: "20px", fontSize: "22px" }}> {result}</div>

      {/* Render Button grid using .map() */}

      <div className="button-grid">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)} className="button">
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Calculator;
