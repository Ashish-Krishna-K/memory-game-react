import { useState } from "react";
import "./styles/App.css";
import ScoreBoard from "./components/ScoreBoard";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";

function App() {
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  // when it's set to true we'll show the game over screen
  // with option to play again
  const [gameOver, setGameOver] = useState<boolean>(false);

  // function to increment scores
  const incrementScores = () => {
    setCurrentScore(currentScore + 1);
    // only change the best score if
    // current score is greater than
    // current best
    if (currentScore >= bestScore) {
      setBestScore(bestScore + 1);
    }
  };

  // function to change the game over state
  const changeGameOverState = (val: boolean) => setGameOver(val);

  return (
    <>
      <header>
        <h1>Memory Game</h1>
      </header>
      <main>
        <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
        {/* 
          if gameover is true show the gameover 
          screen, if not show the game screen
        */}
        {gameOver ? (
          <GameOver
            gameOver={changeGameOverState}
            resetScore={() => setCurrentScore(0)}
          />
        ) : (
          <GameBoard
            incrementScores={incrementScores}
            gameOver={changeGameOverState}
          />
        )}
      </main>
      <footer>
        <h2>
          Project by{" "}
          <a href="https://github.com/Ashish-Krishna-K">Ashish-Krishna-K</a>
        </h2>
        <h2>Pokémon and Pokémon character names are trademarks of Nintendo.</h2>
        <h2>
          Pokemon data obtained from {' '}
          <a href="https://pokeapi.co/">PokeAPI</a>
        </h2>
      </footer>
    </>
  );
}

export default App;
