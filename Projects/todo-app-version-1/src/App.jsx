import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItem from "./Components/TodoItems";
import "./Components/App.css";

function App() {
  return (
    <>
      <div className="todo-container container-fluid">
        <AppName />
        <AddTodo />

        <div className="todo-items-container">
          <TodoItem />
        </div>
      </div>
    </>
  );
}

export default App;
