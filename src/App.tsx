import { useState } from "react";
import "./styles/App.css";
import ScoreBoard from "./components/ScoreBoard";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";

function App() {
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const incrementScores = () => {
    setCurrentScore(currentScore + 1);
    if (currentScore >= bestScore) {
      setBestScore(bestScore + 1);
    }
  };

  const changeGameOverState = (val: boolean) => setGameOver(val);

  return (
    <>
      <header>
        <h1>Memory Game</h1>
      </header>
      <main>
        <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
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
      </footer>
    </>
  );
}

export default App;
