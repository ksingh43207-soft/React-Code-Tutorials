const Display = ({displayValue})=> {
  return(
    <>
      <input type="text" id="display" className="form-control"  value={displayValue} readOnly />
    </>
  );
}

export default Display;