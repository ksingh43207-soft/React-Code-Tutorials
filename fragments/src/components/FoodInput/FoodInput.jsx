const FoodInput = ({ handleKeyDown, value }) => {
  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Enter food item"
        style={{ marginBottom: "16px" }}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default FoodInput;
