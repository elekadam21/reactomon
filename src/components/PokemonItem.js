import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHttp } from "../hooks/http";

import "./PokemonItem.css";

const PokemonItem = (props) => {
  const [individualPokemonUrl] = useState(props.pokemon.url);

  const [isLoading, fetchedData] = useHttp(individualPokemonUrl, [
    individualPokemonUrl,
  ]);

  const [name, front_default] = fetchedData
    ? [
        fetchedData.data.name,
        fetchedData.data.sprites.other.dream_world.front_default,
      ]
    : [null, null];

  let content = <p>Loading...</p>;

  if (!isLoading) {
    content = (
      <div className="card">
        <Link
          to={props.pokemon.url
            .replace("https://pokeapi.co/api/v2", "")
            .slice(0, -1)}
        >
          <h3>{name}</h3>
          <span className="helper"></span>
          <img src={front_default} alt="Pokemon-img" />
        </Link>
      </div>
    );
  }

  return content;
};

export default PokemonItem;
