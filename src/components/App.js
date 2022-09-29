import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([]);
  const [searchedItem, setSearchedItem] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then((itemsArray) => {
      setItems(itemsArray);
    });
  }, []);

  const itemsDisplayed = items.filter((item) => {
    return item.description.toLowerCase().includes(searchedItem.toLowerCase());
  });

  function handleDeleteItem(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  return (
    <div className="app">
      <Header onSearch={setSearchedItem}/>
      <ListingsContainer 
        items={itemsDisplayed}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default App;
