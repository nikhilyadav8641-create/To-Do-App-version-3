import TodoHeading from "./Component/heading";
import AddToDo from "./Component/Add_Todo";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from "./Component/TodoItems";

function App() {
  let todoItems = [
    { name: "Buy Milk", dueDate: "4/10/2026" },
    { name: "Go to college", dueDate: "4/10/2026" },
    { name: "Go to mall", dueDate: "4/10/2026" },
  ];
  return (
    <>
      <TodoHeading></TodoHeading>
      <AddToDo></AddToDo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </>
  );
}

export default App;
