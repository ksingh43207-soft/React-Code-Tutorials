import TodoItem from "./TodoItem";

const TodoList = ({todoItems, onRemoveItem}) => {
  return (
    <>
      {todoItems.map((item) => {
        return (
          <TodoItem key={item.id} name={item.name} date={item.date} time={item.time} id={item.id} onRemoveItem={onRemoveItem} />
        );
      })}
    </>
  );
};

export default TodoList;
