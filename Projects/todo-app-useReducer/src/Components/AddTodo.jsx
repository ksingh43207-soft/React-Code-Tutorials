import { useRef, useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const todoDateElement = useRef();
  const todoTimeElement = useRef();

  const handleAddButtonClick = (e) => {
    e.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    const todoTime = todoTimeElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    todoTimeElement.current.value = "";
    addNewItem(todoName, todoDate, todoTime);
    console.log(todoName, todoDate, todoTime);
  };

  return (
    <>
      <form className="row custom-row" onSubmit={handleAddButtonClick}>
        <div className="col-3">
          <input
            className="form-control"
            placeholder="Enter todo here..."
            ref={todoNameElement}
          />
        </div>

        <div className="col-3">
          <input type="date" className="form-control" ref={todoDateElement} />
        </div>

        <div className="col-3">
          <input type="time" className="form-control" ref={todoTimeElement} />
        </div>

        <div className="col-2">
          <button className="btn btn-success">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTodo;
