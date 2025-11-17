import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const {todoItems} = useContext(TodoItemsContext);
  return (
    <>
      {todoItems.map((item) => {
        return (
          <TodoItem key={item.id} name={item.name} date={item.date} time={item.time} id={item.id}
          />
        );
      })}
    </>
  );
};

export default TodoList;
