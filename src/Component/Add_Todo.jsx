import { useState } from "react"
import style from "./Add_Todo.module.css"
function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] =useState("")
  const [dueDate, setDueDate]=useState(" ")
  const handleNameChange =(event)=>{
    setTodoName(event.target.value)
  }
  const handleDateChange = (event)=>{
    setDueDate(event.target.value)
  }

  const handleAddButtonClicked = ()=>{
    onNewItem(todoName,dueDate)
    setDueDate("")
    setTodoName("")
  }
  return (
    <>
      <div className="container">
        <div className="row kg_row">
          <div className="col-6">
            <input type="text" placeholder="Enter To-Do here"  className={style.inputNameStyle} value={todoName} onChange={handleNameChange}/>
          </div>
          <div className="col-4">
            <input type="date" value={dueDate}  className={style.inputDateStyle} onChange={handleDateChange} />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg_button" 
            onClick={handleAddButtonClicked}>
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddToDo;
