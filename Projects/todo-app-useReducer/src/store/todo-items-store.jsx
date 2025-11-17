import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});


const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      {
        id: Date.now().toString(),
        name: action.payload.itemName,
        date: action.payload.itemDate,
        time: action.payload.itemTime,
      },
    ];

    return newTodoItems;
  }

  if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.id !== action.payload.id
    );
    return newTodoItems;
  }

  return newTodoItems;
};

const TodoItemsContextProvider = ( {children} ) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDate, itemTime) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: { itemName, itemDate, itemTime },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (id) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { id },
    };
    dispatchTodoItems(deleteItemAction);
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

        {children}
      </TodoItemsContext.Provider>
    </>
  );
};

export default TodoItemsContextProvider;
