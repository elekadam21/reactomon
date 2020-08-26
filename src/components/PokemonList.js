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
    console.log(this.state.count);
    return this.state.pokemons.map((pokemon) => (
      <PokemonItem pokemon={pokemon} />
    ));
  }
}

export default PokemonList;
