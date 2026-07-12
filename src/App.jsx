import TodoHeading from "./Component/heading";
import AddToDo from "./Component/Add_Todo";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from "./Component/TodoItems";
import WelcomeMessage  from "./Component/WelcomeMessage";
import { useState } from "react";

function App() {
  // let initialTodoItems = [
  //   { name: "Buy Milk", dueDate: "4/10/2026" },
  //   { name: "Go to college", dueDate: "4/10/2026" },
  //   { name: "Go to mall", dueDate: "4/10/2026" },
  //   { name: "Go to Gym", dueDate: "5/10/2026" },
  //   { name: "Happy Birthday", dueDate: "6/10/2026" },
  // ];
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`item added ${itemName} on ${itemDueDate}`);
    const newTodoItem = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItem)
  };
  return (
    <>
      <TodoHeading></TodoHeading>
      <AddToDo onNewItem={handleNewItem}></AddToDo>
      {todoItems.length== 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems}></TodoItems>
    </>
  );
}

export default App;
