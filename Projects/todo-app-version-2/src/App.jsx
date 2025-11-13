import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./Components/App.css";
import TodoItems from "./Components/TodoItems";

function App() {
  const todoItems = [
    { id: "11398362836", name: "Buy Milk", date: "4/09/2025" },
    { id: "11398367836", name: "Buy Coffee", date: "3/08/2025" },
    { id: "11398362838", name: "Go to College", date: "3/09/2024" },
    { id: "21398362836", name: "Drink Coffee", date: "6/10/2025" },
  ];

  return (
    <>
      <div className="todo-container container-fluid">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </div>
    </>
  );
}

export default App;
