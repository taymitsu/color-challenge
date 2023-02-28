import React, { useState } from 'react';
import './App.css';
import GameText from './GameText';
import ColorSwatches from './ColorSwatches'
import Result from './Result'
import PlayAgain from './PlayAgain';

function App() {
  const [colors, setColors] = useState([
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),
  ]);
  const [selectedColor, setSelectedColor] = useState(Math.floor(Math.random() * 3));
  const [result, setResult] = useState('');

  //#AABBCC. Without the # you have three numbers: AA, BB, CC. 
  //These are base 16 and have a range of 0 - 255. 
  //That means you need to start with a random number between 0 and 255
  //then convert it to base 16.

  function getRandomColor() {
    const hexChars = '0123456789ABCDEF';
    let colors = [];
    for (let i = 0; i < 3; i++) {
      let hexColor = '#';
      for (let j = 0; j < 6; j++) {
        hexColor += hexChars[Math.floor(Math.random() * 16)];
      }
      colors.push(hexColor);
    }
    return colors;
  }

  function handleColorClick(index) {
    if (index === selectedColor) {
      setResult('Correct');
    } else {
      setResult('Incorrect');
    }
  }

  function handlePlayAgain() {
    setColors(getRandomColor());
    setSelectedColor(Math.floor(Math.random() * 3));
    setResult('');
  }

  return (
    <div className="App">
      <ColorSwatches colors={colors} handleColorClick={handleColorClick} />
      <GameText colors={colors} selectedColor={selectedColor}/>
      <Result result={result}/>
      <PlayAgain onClick={handlePlayAgain}/>
    </div>
  );
}

export default App;
