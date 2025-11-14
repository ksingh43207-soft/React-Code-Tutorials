import styles from "./buttons.module.css";

const Buttons = ({onButtonClick}) => {

  const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', 
    '/', '9', '0', "<", '=', '.'
  ]

  return (
    <>
      <div className={`${styles["buttons-container"]}`}>
        {
          buttonNames.map((btnName) => <button key={btnName} className="btn btn-outline-secondary" onClick={()=>onButtonClick(btnName)}>{btnName}</button>)
        }
      </div>
    </>
  );
};

export default Buttons;
