import AddComponent from "./components/AddComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LIstComponent from "./components/LIstComponent";
import { useState } from "react";

function App() {
  const initialList = [
    { counter:1, id: 1243242343223, name: "Jacket" },
    { counter:5,id: 2524525245243, name: "Shirt" },
    { counter:5, id: 3443222443256, name: "Socks" },
  ];

  const [items, setItems] = useState(initialList);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <>
      <Header />
      <AddComponent startList={items} onAddItem={handleAddItem} />
      <LIstComponent startList={items} />
      <Footer />
    </>
  );
}

export default App;




