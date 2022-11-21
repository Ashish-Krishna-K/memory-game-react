import React, { useState } from 'react';
import Cards from './components/Cards';
import Scoreboard from './components/Scoreboard';
import GameOver from './components/Game-over';
import './Styles/App.css';


function getRandomNumber(num) {
  return Math.round(Math.random() * num);
}


function App() {
  const [plays, setPlays] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const randNums = [];

  for (let i = 0; i < 10; i++) {
    randNums[i] = getRandomNumber(57);
  }

  const handleCardClick = (e) => {
    const status = plays.some(item => item === e.target.parentNode.dataset.name);
    if (status) {
      setGameOver(true); 
    } else {
      setPlays(plays.concat(e.target.parentNode.dataset.name));
      setCurrentScore(currentScore + 1);
      if (currentScore >= bestScore) setBestScore(bestScore + 1);
    }
  }

  const handlePlayAgain = (e) => {
    setPlays([]);
    setGameOver(false);
    setCurrentScore(0);
  }

  return (
    <div className="App">
      <Scoreboard gameStatus={gameOver} 
      currentScore={currentScore} 
      bestScore={bestScore}
      />
      {gameOver ? 
       <GameOver playAgain={handlePlayAgain}/> : 
       <Cards randNums={randNums} handleCardClick={handleCardClick}/>
       }
    </div>
  );
}

export default App;
