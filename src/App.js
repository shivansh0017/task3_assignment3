import React, { useState } from "react";
import "./App.css";

function ColorPicker({ colors }) {
  const [selectedColor, setSelectedColor] = useState("");
  const [showColors, setShowColors] = useState(false);
  const [showColorButtons, setShowColorButtons] = useState(true); // Initially, show the color buttons
  const [boxStyle, setBoxStyle] = useState({});

  const handleButtonClick = () => {
    setShowColors(!showColors);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setBoxStyle({
      background: color
    });
    setShowColorButtons(false);
  };

  return (
    <>
      <h2 className="text-center my-3 font-weight-bold">Color Picker</h2>
      <div className="container">
        <div className="ColorPicker">
          <button className="pick-the-color" onClick={handleButtonClick}>
            Pick a color
          </button>
          {showColors && (
            <div className="box container-fluid" style={boxStyle}>
              <div className="color-buttons">
                {showColorButtons &&
                  colors.map((color, index) => (
                    <div
                      key={index}
                      className={`color-button ${
                        color === selectedColor ? "selected" : ""
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorClick(color)}
                    ></div>
                  ))}
              </div>
              {selectedColor && (
                <div
                  className="selected-color"
                  style={{ backgroundColor: selectedColor }}
                ></div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function App() {
  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "pink",
    "cyan",
    "brown",
    "gray",
    "magenta",
    "teal",
    "lime",
    "indigo",
    "violet",
    "lightcoral",
    "turquoise",
    "wheat",
    "gold"
  ];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;