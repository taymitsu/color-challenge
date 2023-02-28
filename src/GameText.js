import React from 'react';

function GameText({ colors, selectedColor }) {
  return (
    <div className="gametext">
      <h1>Select the correct color square: {colors[selectedColor]}</h1>
    </div>
  );
}

export default GameText;