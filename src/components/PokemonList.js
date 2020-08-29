import React, { useState } from "react";
import PokemonItem from "./PokemonItem";
import { useHttp } from "../hooks/http";

const PokemonList = (props) => {
  const [pokemonUrl, setPokemonUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );

  const [isLoading, fetchedData] = useHttp(pokemonUrl, [pokemonUrl]);

  const [next, previous, pokemons] = fetchedData
    ? [
        fetchedData.data.next,
        fetchedData.data.previous,
        fetchedData.data.results,
      ]
    : [null, null, []];

  console.log(pokemons);

  const pokemonUrlHandler = (url) => {
    setPokemonUrl(url);
  };

  let content = <p>Loading...</p>;

  if (!isLoading && pokemons && pokemons.length > 0) {
    content = (
      <React.Fragment>
        <button
          onClick={() => {
            pokemonUrlHandler(previous);
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            pokemonUrlHandler(next);
          }}
        >
          Next
        </button>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {pokemons.map((pokemon) => (
            <div style={{ flex: "1" }} key={pokemon.url}>
              <PokemonItem key={pokemon.url} pokemon={pokemon} />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  } else if ((!isLoading && !pokemons) || pokemons.length === 0) {
    content = <p>Could not fetch any data.</p>;
  }

  return content;
};

export default PokemonList;
