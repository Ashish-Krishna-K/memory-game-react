import { useState } from "react";
import { generateIdArray } from "../helpers";
import PokemonDisplayCard from "./PokemonDisplayCard";
import { type GameProps } from "../appTypes";
import "../styles/GameBoard.css";

// component where all the clickable
// items are shown
export default function GameBoard({
  incrementScores,
  gameOver,
}: Pick<GameProps, "incrementScores" | "gameOver">) {
  const [apiIds, setApiIds] = useState<number[]>(generateIdArray());
  // keeping track of all the selected items in order to check
  // for duplicate selections(ideally length of this array
  // should be used as current score, but i'm keeping a
  // seperate currentScore state to make it easier)
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  // function to handle user clicking on item
  const handleUserSelection = (id: number) => {
    if (selectedIds.includes(id)) {
      // resetting state
      // in case user
      // chooses to play
      // again
      setSelectedIds([]);
      gameOver(true);
    } else {
      setSelectedIds([...selectedIds, id]);
      // everytime an item is selected
      // generating new set of Id's to
      // be fetched from API
      setApiIds(generateIdArray());
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
