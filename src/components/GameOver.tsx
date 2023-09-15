import { type GameProps } from "../appTypes";
import "../styles/GameOver.css";

export default function GameOver({
  gameOver,
  resetScore,
}: Pick<GameProps, "gameOver" | "resetScore">) {
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
