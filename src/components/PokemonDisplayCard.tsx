import { useEffect, useState } from "react";
import { type PokemonData, type PokemonDisplayProps } from "../appTypes";
import { capitalize } from "../helpers";
import "../styles/PokemonDisplayCard.css";

export default function PokemonDisplayCard({
  id,
  handleSelection,
}: PokemonDisplayProps) {
  const [apiData, setApiData] = useState<PokemonData>({
    id: id,
    name: "",
    image: "",
  });
  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await api.json();
        if (!ignore) {
          setApiData({
            id: data.id,
            name: capitalize(data.name),
            image: data.sprites.front_default,
          });
        }
      } catch (error) {
        console.log(error);
      }
    })();
    return () => {
      ignore = true;
    };
  }, [id]);

  return (
    <li onClick={() => handleSelection(id)} className="card">
      {apiData.name && (
        <>
          <img
            src={apiData.image}
            alt={apiData.name}
            width="150"
            height="auto"
          />
          <h3>{apiData.name}</h3>
        </>
      )}
    </li>
  );
}
