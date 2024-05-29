import AddComponent from "./components/AddComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LIstComponent from "./components/LIstComponent";
import { useState } from "react";



const initialList = [
  { counter:1, id: 1243242343223, name: "Jacket" },
  { counter:5,id: 2524525245243, name: "Shirt" },
  { counter:5, id: 3443222443256, name: "Socks" },
];




function App() {
 

  const [items, setItems] = useState(initialList);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };


  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
    console.log("ne se trie");
  }

  return (
    <>
      <Header />
      <AddComponent startList={items} onAddItem={handleAddItem} />
      <LIstComponent startList={items} onDeleteItem={ handleDeleteItem } />
      <Footer />
    </>
  );
}

export default App;




