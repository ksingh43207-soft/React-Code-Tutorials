import "./item.css";
const Item = ({ foodItem, handleBuyClick, isBought, handleRemoveClick }) => {
  return (
    <>
      <li className={`list-group-item ${isBought ? "bought-item" : ""}`}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6>{foodItem.name}</h6>
            <p>{foodItem.age}</p>
          </div>
          <p>{foodItem.empId}</p>

          <button
            className={`button btn ${
              isBought ? "btn-danger" : "btn-secondary"
            }`}
            onClick={isBought ? handleRemoveClick : handleBuyClick}
          >
            {isBought ? "Remove" : "Buy"}
          </button>
        </div>
      </li>
    </>
  );
};

export default Item;
