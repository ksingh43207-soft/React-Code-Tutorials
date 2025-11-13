import styles from "./App.module.css";
import Buttons from "./components/Buttons/Buttons";
import Display from "./components/display/Display";

function App() {
  return (
    <div className={`${styles['calculator-container']}`}>
      <Display />
      <Buttons />
    </div>
  );
}

export default App;
