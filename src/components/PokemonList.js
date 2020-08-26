import React, { Component } from "react";
import PokemonItem from "./PokemonItem";
import axios from "axios";

class PokemonList extends Component {
  state = {
    count: [],
    next: [],
    previous: [],
    pokemons: [],
  };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) =>
      this.setState({
        count: res.data.count,
        next: res.data.next,
        previous: res.data.previous,
        pokemons: res.data.results,
      })
    );
  }

  render() {
    return this.state.pokemons.map((pokemon) => (
      <PokemonItem key={pokemon.url} pokemon={pokemon} />
    ));
  }
}

export default PokemonList;
