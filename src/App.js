import "./App.css";

import React, { useState } from "react";

function App() {
  const boxClasses = [
    { id: 1, className: "Solid", name: "Çekirdek", selected: false },
    { id: 2, className: "Solid", name: "Cips", selected: false },
    { id: 3, className: "Solid", name: "Çikolata", selected: false },
    { id: 4, className: "Liquid", name: "Kola", selected: false },
    { id: 5, className: "Liquid", name: "Sarı Kola", selected: false },
    { id: 6, className: "Liquid", name: "Gazoz", selected: false },
  ];

  const [boxes, setBoxes] = useState(boxClasses);
  const [selectedClasses, setSelectedClasses] = useState([]);

  const handleBoxClick = (id) => {
    const selectedBoxes = boxes.filter((box) => box.selected);
    if (
      selectedBoxes.length === 3 &&
      !selectedBoxes.find((box) => box.id === id)
    ) {
      alert("En fazla 3 kutu seçebilirsiniz.");
      return;
    }
    const clickedBox = boxes.find((box) => box.id === id);
    const sameClassSelected = selectedBoxes.filter(
      (box) => box.className === clickedBox.className
    );
    if (sameClassSelected.length === 2 && !clickedBox.selected) {
      alert("Aynı klastan en fazla 2 kutu seçebilirsiniz.");
      return;
    }
    const updatedBoxes = boxes.map((box) => {
      if (box.id === id) {
        return { ...box, selected: !box.selected };
      }
      return box;
    });
    setBoxes(updatedBoxes);
  };
  //butonların foknsiyonları
  const handleClearSolid = () => {
    const updatedBoxes = boxes.map((box) => {
      if (box.className === "Solid" && box.selected) {
        return { ...box, selected: false };
      }
      return box;
    });
    setBoxes(updatedBoxes);

    const selectedBoxClasses = updatedBoxes
      .filter((box) => box.selected)
      .map((box) => box.className);
    setSelectedClasses(selectedBoxClasses);
  };

  const handleClearLiquid = () => {
    const updatedBoxes = boxes.map((box) => {
      if (box.className === "Liquid" && box.selected) {
        return { ...box, selected: false };
      }
      return box;
    });
    setBoxes(updatedBoxes);

    const selectedBoxClasses = updatedBoxes
      .filter((box) => box.selected)
      .map((box) => box.className);
    setSelectedClasses(selectedBoxClasses);
  };

  const handleClearAll = () => {
    setBoxes(boxClasses);
    setSelectedClasses([]);
  };

  return (
    <div className="App">
      {boxes.map((box) => (
        <div
          key={box.id}
          className={box.className}
          style={{
            width: 100,
            height: 100,
            border: "1px solid black",
            backgroundColor: box.selected ? "purple" : "white",
            cursor: "pointer",
          }}
          onClick={() => handleBoxClick(box.id)}
        >
          {box.name}
        </div>
      ))}

      <button onClick={handleClearSolid}>Yemek</button>
      <button onClick={handleClearLiquid}>İçecek</button>
      <button onClick={handleClearAll}>Hepsi</button>
    </div>
  );
}

export default App;
