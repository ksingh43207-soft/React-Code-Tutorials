import TodoItem from "./TodoItem";

const TodoItems = ({todoItems}) => {
  return (
    <div className="todo-items-container">
      {todoItems.map((item) => {
        console.log('item', item)
        return (
          <TodoItem key={item.id} name={item.name} date={item.date}  />
        );
      })}
    </div>
  );
};

export default TodoItems;
