import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHttp } from "../hooks/http";

import "./PokemonItem.css";

const PokemonItem = (props) => {
  const [individualPokemonUrl] = useState(props.pokemon.url);
  const [caught, setCaught] = useState(false);

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

  let catchButton;

  if (!caught) {
    catchButton = (
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => {
          setCaught(true);
        }}
      >
        Catch!
      </button>
    );
  } else {
    catchButton = (
      <button type="button" className="btn btn-outline-secondary" disabled>
        Caught
      </button>
    );
  }
  if (!isLoading) {
    content = (
      <div className="card">
        <div className="card-top">
          <Link
            to={props.pokemon.url
              .replace("https://pokeapi.co/api/v2", "")
              .slice(0, -1)}
          >
            <h3>{name}</h3>
            <img src={front_default} alt="Pokemon-img" />
          </Link>
        </div>
        {catchButton}
      </div>
    );
  }

  return content;
};

export default PokemonItem;
