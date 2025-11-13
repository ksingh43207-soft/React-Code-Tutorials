function AddTodo() {
  return (
    <>
      <div className="row custom-row">
        <div className="col-5">
          <input className="form-control" placeholder="Enter todo here..." />
        </div>
        <div className="col-5">
          <input type="date" className="form-control" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
