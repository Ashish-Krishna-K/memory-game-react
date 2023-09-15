import { useEffect, useState } from "react";
import { type PokemonData, type PokemonDisplayProps } from "../appTypes";
import { capitalize } from "../helpers";
import "../styles/PokemonDisplayCard.css";

// component to display the individual clickable
// item/card
export default function PokemonDisplayCard({
  id,
  handleSelection,
}: PokemonDisplayProps) {
  const [apiData, setApiData] = useState<PokemonData>({
    id: id,
    name: "",
    image: "",
  });

  // fetching data from api
  useEffect(() => {
    // ignore variable is used
    // to ensure the state is
    // not changed after the
    // component is unmounted.
    let ignore = false;
    (async () => {
      try {
        const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await api.json();
        // ignore is false so component is
        // still mounted.
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
    // component is unounted
    // set ignore to true to
    // avoid further state
    // changes.
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
