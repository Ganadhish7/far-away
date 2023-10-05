import { useState } from "react";

export default function Form({ onAddItems }) {
  //  form component
  const [description, setDescription] = useState(""); // state for item description
  const [quantity, setQuantity] = useState(1); // state for quantity

  function handleSubmit(e) {
    // handle form submission
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))} // select quantity of an item
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map(
          (
            num // maximum length should be 20 min should be 1
          ) => (
            <option value={num} key={num}>
              {num}
            </option>
          )
        )}
      </select>
      <input // item description
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
