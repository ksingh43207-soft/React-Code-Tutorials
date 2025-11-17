import { useContext } from "react";
import styles from "./todoItem.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({name, date, time, id}) {
  const {deleteItem} = useContext(TodoItemsContext)
  return (
    <>
      <div className={`${styles["custom-row"]} row`}>
        <div className="col-3">
          <h6>{name?name:"--"}</h6>
          <p>{id}</p>
        </div>
        <div className="col-3">
          <h6>{date?date:"--"}</h6>
        </div>
        <div className="col-3">
          <h6>{time?time:"--"}</h6>
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-danger" onClick={()=>deleteItem(id)}>
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
