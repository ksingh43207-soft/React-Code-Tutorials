import styles from "./buttons.module.css";

const Buttons = () => {

  const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', 
    '/', '9', '0', '=', '.'
  ]

  return (
    <>
      <div className={`${styles["buttons-container"]}`}>
        {
          buttonNames.map((btnName) => <button className="btn btn-outline-secondary">{btnName}</button>)
        }
      </div>
    </>
  );
};

export default Buttons;
