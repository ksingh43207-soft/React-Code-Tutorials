import { useState } from "react";
import Item from "../Item/Item";

const FoodItem = ({ foodItem, onRemoveItem }) => {
  const [isBoughtItems, setIsBoughtItems] = useState([]);

  const handleBuyItems = (itemName) => {
    let boughtItems = [...isBoughtItems, itemName];
    setIsBoughtItems(boughtItems);
    console.log(boughtItems)
  };

  const handleRemoveItems = (itemName) => {
    const updatedItems = isBoughtItems.filter((name) => {
      return (
        name !== itemName
      );
    });
    setIsBoughtItems(updatedItems);
    console.log(updatedItems)
    console.log(`${itemName} is removed from the list`);
  };

  return (
    <>
      <ul className="list-group">
        {foodItem.map((item) => {
          return (
            <Item
              key={item.id}
              foodItem={item}
              isBought={isBoughtItems.includes(item.name)}
              handleBuyClick={() => handleBuyItems(item.name)}
              handleRemoveClick={() => handleRemoveItems(item.name)}
            />
          );
        })}
      </ul>
    </>
  );
};

export default FoodItem;
