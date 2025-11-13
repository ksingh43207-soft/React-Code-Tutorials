import styles from "./todoItem.module.css";

function TodoItem({name, date}) {
  return (
    <>
      <div className={`${styles["custom-row"]} row`}>
        <div className="col-5">
          <h6>{name}</h6>
        </div>
        <div className="col-5">
          <h6>{date}</h6>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
