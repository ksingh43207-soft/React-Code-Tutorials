  import AddTodo from "./Components/AddTodo";
  import AppName from "./Components/AppName";
  import "./Components/App.css";
  import TodoList from "./Components/TodoList";
  import { useState, useEffect } from "react";
  import WelcomeMessage from "./Components/WelcomeMessage";

  function App() {
    // const todoItemsList = [
    //   { id: "11398362836", name: "Buy Milk", date: "4/09/2025", time: "11:45PM" },
    //   {
    //     id: "11398367836",
    //     name: "Buy Coffee",
    //     date: "3/08/2025",
    //     time: "11:45PM",
    //   },
    //   {
    //     id: "11398362838",
    //     name: "Go to College",
    //     date: "3/09/2024",
    //     time: "11:45PM",
    //   },
    //   {
    //     id: "21398362836",
    //     name: "Drink Coffee",
    //     date: "6/10/2025",
    //     time: "11:45PM",
    //   },
    // ];

    const [todoItems, setTodoItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const handlerAddItem = (itemName, itemDate, itemTime) => {
      const newItems = {
        id: Date.now().toString(),
        name: itemName,
        date: itemDate,
        time: itemTime,
      };
      setTodoItems((prevItems) => [...prevItems, newItems]);
    };

    const handlerRemoveItems = (id) => {
      const updatedList = todoItems.filter((item) => item.id !== id);
      setTodoItems(updatedList);
    };

    useEffect(() => {
      const saved = localStorage.getItem("todoItems");
      if (saved) {
        setTodoItems(JSON.parse(saved));
      }
      setIsLoaded(true);
    }, []);

    useEffect(() => {
      if (isLoaded) {
        localStorage.setItem("todoItems", JSON.stringify(todoItems));
      }
    }, [todoItems, isLoaded]);

    return (
      <>
        <div className="todo-container container-fluid">
          <AppName />
          <AddTodo addNewItem={handlerAddItem} />
          {todoItems.length === 0 ? (
            <WelcomeMessage />
          ) : (
            <div className="todo-items-container">
              <TodoList todoItems={todoItems} onRemoveItem={handlerRemoveItems} />
            </div>
          )}
        </div>
      </>
    );
  }

  export default App;
