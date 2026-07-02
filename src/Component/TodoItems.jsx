import TodoItem from "./ToDo_item";
function TodoItems({ todoItems }) {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        />
      ))}
    </div>
  );
}
export default TodoItems;
