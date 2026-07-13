function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <>
      <div className="container text-center">
        <div className="row kg_row">
          <div className="col-6 item">{todoName}</div>
          <div className="col-4 item">{todoDate}</div>
          <div className="col-2 item">
            <button
              type="button"
              className="btn btn-danger kg_button"
              onClick={() => onDeleteClick(todoName)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoItem;
