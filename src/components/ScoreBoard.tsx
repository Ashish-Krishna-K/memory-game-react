import { type ScoreProps } from "../appTypes";
import "../styles/ScoreBoard.css";

// component to display the score board.
export default function ScoreBoard({
  currentScore,
  bestScore,
}: Pick<ScoreProps, "currentScore" | "bestScore">) {
  return (
    <section className="score-board">
      <h2 className="current-score-display">
        <span>Current Score: </span>
        <span>{currentScore}</span>
      </h2>
      <h2 className="best-score-display">
        <span>Best Score: </span>
        <span>{bestScore}</span>
      </h2>
    </section>
  );
}
