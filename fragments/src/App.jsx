import { React, useState } from "react";
import "./App.css";
import FoodItem from "./components/FoodItem/FoodItem";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Container from "./components/Container/Container";
import FoodInput from "./components/FoodInput/FoodInput";

function App() {
  // const data = [
  //   {
  //     name: "Sabzi",
  //     id: 83170,
  //   },
  //   {
  //     name: "Green Vegitable",
  //     id: 83171,
  //   },
  //   {
  //     name: "Roti",
  //     id: 34521,
  //   },
  //   {
  //     name: "Rice",
  //     id: 72613,
  //   },
  //   {
  //     name: "Milk",
  //     id: 93170,
  //   },
  // ];

  const [foodItems, setFoodItems] = useState([
    {
      name: "Daal",
      id: 53170,
    },
    {
      name: "Vegitables",
      id: 82171,
    },
    {
      name: "Chicken",
      id: 34511,
    },
  ]);

  // const onRemoveItem = (itemName) => {
  //   const updatedItems = foodItems.filter((item) => {
  //     item.name !== itemName;
  //   });
  //   setFoodItems(updatedItems);
  //   console.log(updatedItems);
  // };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFoodItem = e.target.value;
      if (newFoodItem.length === 0) return;
      const newItem = {
        name: newFoodItem,
        id: Date.now(),
      };

      e.target.value = "";
      let newItems = [...foodItems, newItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1>Healthy Food list</h1>
        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMessage foodItem={foodItems} />
        <FoodItem foodItem={foodItems} 
        // onRemoveItem={onRemoveItem}
         />
      </Container>
    </>
  );
}

export default App;
