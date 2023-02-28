import React from 'react';


function ColorSwatches ({ colors, handleColorClick }) {
  return (
    <div className="colorSwatches">
      {colors.map((color, index) => (
        <div
          key={index}
          className="color-square"
          style={{ backgroundColor: color }}
          onClick={() => handleColorClick(index)}
        />
      ))}
    </div>
  )
}

export default ColorSwatches;