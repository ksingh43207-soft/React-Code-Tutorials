import { useState } from "react";
import styles from "./App.module.css";
import Buttons from "./components/Buttons/Buttons";
import Display from "./components/display/Display";

function App() {
  const [calculatorvalue, setCalculatorValue] = useState("");

  const onButtonClick = (buttonText) => {
    switch (buttonText) {
      case "C":
        const currvalue = "";
        setCalculatorValue(currvalue);
        break;

      case "=":
        const result = eval(calculatorvalue);
        setCalculatorValue(result);
        break;

      case "<":
        const removeLastValue = calculatorvalue.slice(0, -1);
        setCalculatorValue(removeLastValue);
        break;

      default:
        const newDisplayValue = calculatorvalue + buttonText;
        setCalculatorValue(newDisplayValue);
        break;
    }
  };

  return (
    <div className={`${styles["calculator-container"]}`}>
      <Display displayValue={calculatorvalue} />
      <Buttons onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
