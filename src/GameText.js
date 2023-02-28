import React from 'react';

//title and "select correct color"
function GameText(props) {
  const { colors, selectedColor } = props;
  return (
    <div>
      <h3>Select the correct color square: {colors[selectedColor]}</h3>
    </div>
  );
}

export default GameText