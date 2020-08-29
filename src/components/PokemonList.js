import React, { useState } from "react";
import PokemonItem from "./PokemonItem";
import { useHttp } from "../hooks/http";
import PropTypes from "prop-types";

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

  console.log(pokemonUrl);
  // console.log(next);
  // console.log(previous);

  const pokemonUrlHandler = (url) => {
    setPokemonUrl(url);
  };

  return (
    <React.Fragment>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {pokemons.map((pokemon) => (
          <div style={{ flex: "1" }} key={pokemon.url}>
            <PokemonItem key={pokemon.url} pokemon={pokemon} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default PokemonList;
