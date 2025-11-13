// import data from "../UserList/data";

const ErrorMessage = ({foodItem})=> {
  return(
    <>
      {foodItem.length == 0 && <h6>Opps there is no food item</h6>}
    </>
  )
}

export default ErrorMessage;