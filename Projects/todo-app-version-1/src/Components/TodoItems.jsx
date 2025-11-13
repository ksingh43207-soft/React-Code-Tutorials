function TodoItem() {

  let todoName  = 'Buy Milk';
  let todoDate = '4/09/2025'

  return (
    <>
      <div className="row custom-row">
        <div className="col-5">
          <h6>{todoName}</h6>
        </div>
        <div className="col-5">
          <h6>{todoDate}</h6>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>

      <div className="row custom-row">
        <div className="col-5">
          <h6>Go to College</h6>
        </div>
        <div className="col-5">
          <h6>4/7/2025</h6>
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
