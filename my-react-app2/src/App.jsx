import Button from "./button/button";
import Hello from "./Hello/Hello";

function App() {
  return <>
    <h2>This is react app</h2>

    <Button/>

    <Hello/>   

    <button className="btn btn-primary">Click</button>
    <button className="btn btn-secondary">Click</button>
    <button className="btn btn-info">Click</button>
    <button className="btn btn-danger">Click</button>
  </>
} 

export default App;