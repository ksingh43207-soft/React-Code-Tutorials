function CutomDate() {
  let currentDate = new Date();

  return (
    <>
      <p>The current time is : {currentDate.toLocaleDateString()} {"-"} {currentDate.toLocaleTimeString()}</p>
    </>
  );
}

export default CutomDate;
