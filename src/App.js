import AddComponent from "./components/AddComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LIstComponent from "./components/LIstComponent";
import { useState } from "react";



// const initialList = [
//   { counter:1, id: 1243242343223, name: "Jacket", packed: false },
//   { counter:5,id: 2524525245243, name: "Shirt", packed: false },
//   { counter:5, id: 3443222443256, name: "Socks", packed: false },
// ];




function App() {
 

  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };


  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
    console.log("ne se trie");
  }

  
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    
    if (confirmed) setItems([]);
  }

  return (
    <>
      <Header />
      <AddComponent startList={items} onAddItem={handleAddItem} />
      <LIstComponent onClearList={handleClearList} setItems={setItems} startList={items} onDeleteItem={handleDeleteItem} onToggleItem={ handleToggleItem} />
      <Footer items={ items } />
    </>
  );
}

export default App;




