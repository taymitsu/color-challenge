import React from 'react';
import './PlayAgain.css'

function PlayAgain(props) {
  return (
    <button className="playAgain"onClick={props.onClick}>Play Again</button>
  )
}

export default PlayAgain;