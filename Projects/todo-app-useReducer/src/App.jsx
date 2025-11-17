import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./Components/App.css";
import TodoList from "./Components/TodoList";
import WelcomeMessage from "./Components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
        <div className="todo-container container-fluid">
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <div className="todo-items-container">
            <TodoList />
          </div>
        </div>
    </TodoItemsContextProvider>
  );
}

export default App;
