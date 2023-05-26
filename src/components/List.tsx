import { useState } from "react";

export function List() {
  const [newItem, setNewItem] = useState("");
  const [hardware, setHardware] = useState([
    "MotherBoard",
    "Ram Memory",
    "SSD",
  ]);

  const addToList = () => {
    setHardware((state) => [...state, newItem]);
  };

  const removeFromList = (item: string) => {
    setTimeout(() => {
      setHardware((state) => state.filter((items) => items !== item));
      console.log(item);
    }, 500);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Novo item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addToList}>Add</button>
      <ul>
        {hardware.map((item) => (
          <>
            <li key={item}>{item}</li>
            <button onClick={() => removeFromList(item)}>Remove</button>
          </>
        ))}
      </ul>
    </>
  );
}
