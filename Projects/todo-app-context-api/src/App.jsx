import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./Components/App.css";
import TodoList from "./Components/TodoList";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDate, itemTime) => {
    const newItems = {
      id: Date.now().toString(),
      name: itemName,
      date: itemDate,
      time: itemTime,
    };
    setTodoItems((prevItems) => [...prevItems, newItems]);
  };

  const deleteItem = (id) => {
    const updatedList = todoItems.filter((item) => item.id !== id);
    setTodoItems(updatedList);
  };

  return (
    <>
      <TodoItemsContext.Provider
        value={{
          todoItems,
          addNewItem,
          deleteItem,
        }}
      >
        <div className="todo-container container-fluid">
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <div className="todo-items-container">
            <TodoList />
          </div>
        </div>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
