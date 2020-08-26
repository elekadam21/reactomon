import React, { Component } from "react";

export class PokemonItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.pokemon.name}</p>
      </div>
    );
  }
}

export default PokemonItem;
