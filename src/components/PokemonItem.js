import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

export class PokemonItem extends Component {
  state = {
    name: [],
    front_default: [],
    url: this.props.pokemon.url,
    pokemon: [],
  };

  componentDidMount() {
    axios.get(this.state.url).then((res) =>
      this.setState({
        name: res.data.name,
        front_default: res.data.sprites.other.dream_world.front_default,
      })
    );
  }

  render() {
    return (
      <div>
        <Link
          to={this.props.pokemon.url
            .replace("https://pokeapi.co/api/v2", "")
            .slice(0, -1)}
        >
          <p>{this.props.pokemon.name}</p>
          <img src={this.state.front_default} alt="Pokemon-img" />
        </Link>
      </div>
    );
  }
}

export default PokemonItem;
