export interface ScoreProps {
  currentScore: number;
  bestScore: number;
}

export interface GameProps {
  incrementScores: () => void;
  gameOver: (val: boolean) => void;
  resetScore: () => void;
}

export interface PokemonDisplayProps {
  id: number;
  handleSelection: (id: number) => void;
}

export interface PokemonData {
  id: number;
  name: string;
  image: string;
}
