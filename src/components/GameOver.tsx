import { type GameProps } from "../appTypes";
import "../styles/GameOver.css";

// component to display the game over
// screen
export default function GameOver({
  gameOver,
  resetScore,
}: Pick<GameProps, "gameOver" | "resetScore">) {
  // function to handle
  // "play again" button click
  const handleReset = () => {
    resetScore();
    gameOver(false);
  };

  return (
    <section className="game-over">
      <h2>Game Over!</h2>
      <button onClick={handleReset} className="game-over-btn">
        Play Again
      </button>
    </section>
  );
}
