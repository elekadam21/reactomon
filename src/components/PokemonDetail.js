import React from "react";
import { useParams, Link } from "react-router-dom";
import { useHttp } from "../hooks/http";
import "./PokemonDetail.css";

const PokemonDetail = (props) => {
  let { id } = useParams();

  const [
    isLoading,
    pokemon,
  ] = useHttp(`https://pokeapi.co/api/v2/pokemon/${id}`, [id]);
  let content = "Loading...";

  if (!isLoading && pokemon) {
    content = (
      <React.Fragment>
        <div className="container">
          <div className="top-row">
            <h1 className="pokemon-name">
              {pokemon.data.species.name.charAt(0).toUpperCase() +
                pokemon.data.species.name.slice(1)}
            </h1>
            <h1 className="pokemon-id">
              <Link to={"/pokemon/" + (parseInt(id) - 1)}>Previous</Link>
              {"#" + ("00" + pokemon.data.id).slice(-3)}
              <Link to={"/pokemon/" + (parseInt(id) + 1)}>Next</Link>
            </h1>
          </div>
          <div className="pokemon-column">
            <h3>Type</h3>
            {pokemon.data.types.map((type) => (
              <p key={type.type.name}>{type.type.name}</p>
            ))}
          </div>
          <div className="pokemon-column">
            <h3>Abilities</h3>
            {pokemon.data.abilities.map((ability) => (
              <p key={ability.ability.name}>{ability.ability.name}</p>
            ))}
          </div>
          <div className="pokemon-column">
            <h3>Height</h3>
            <p>{pokemon.data.height / 10 + "m"}</p>
          </div>
          <div className="pokemon-column">
            <h3>Weight</h3>
            <p>{pokemon.data.weight / 10 + "kg"}</p>
          </div>
          <div className="pokemon-column-stat">
            <h3>Stats</h3>
            {pokemon.data.stats.map((stat) => (
              <div className="stat" key={stat.stat.name}>
                {stat.stat.name} : {stat.base_stat}
              </div>
            ))}
          </div>
          <div className="image">
            <img
              src={pokemon.data.sprites.other.dream_world.front_default}
              alt="pokemon"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
  return content;
};

export default React.memo(PokemonDetail);
