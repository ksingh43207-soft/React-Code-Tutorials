import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const {todoItems} = useContext(TodoItemsContext);

  return (
    <>
      {todoItems.length === 0 && (
        <div className="text-center my-4">
          <h6>Welcome to todo app, please add your's todo here...</h6>
        </div>
      )}
    </>
  );
};

export default WelcomeMessage;
