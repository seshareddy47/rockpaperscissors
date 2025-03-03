import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('Make your choice!');
  const choices = ['rock', 'paper', 'scissors'];

  const handleClick = (playerChoice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const gameResult = determineWinner(playerChoice, computerChoice);
    setResult(`You chose ${playerChoice}, computer chose ${computerChoice}. ${gameResult}`);
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      return "It's a tie!";
    } else if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rock, Paper, Scissors</h1>
        <div className="choices">
          <button onClick={() => handleClick('rock')} className="choice-button">Rock</button>
          <button onClick={() => handleClick('paper')} className="choice-button">Paper</button>
          <button onClick={() => handleClick('scissors')} className="choice-button">Scissors</button>
        </div>
        <div className="result">
          <p>{result}</p>
        </div>
      </header>
    </div>
  );
}

export default App;