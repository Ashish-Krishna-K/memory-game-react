import { useEffect, useState } from "react";
import { generateIdArray } from "../helpers";
import PokemonDisplayCard from "./PokemonDisplayCard";
import { type GameProps } from "../appTypes";
import "../styles/GameBoard.css";

export default function GameBoard({
  incrementScores,
  gameOver,
}: Pick<GameProps, "incrementScores" | "gameOver">) {
  const [apiIds, setApiIds] = useState<number[]>(generateIdArray());
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  useEffect(() => {
    setApiIds(generateIdArray());
  }, [selectedIds]);

  const handleUserSelection = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds([]);
      gameOver(true);
    } else {
      setSelectedIds([...selectedIds, id]);
      incrementScores();
    }
  };

  return (
    <section className="game-board">
      <ul>
        {apiIds.map((id) => (
          <PokemonDisplayCard
            key={id}
            id={id}
            handleSelection={handleUserSelection}
          />
        ))}
      </ul>
    </section>
  );
}
