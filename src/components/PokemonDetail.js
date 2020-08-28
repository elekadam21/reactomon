import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import PropTypes from "prop-types";

export class PokemonDetail extends Component {
  state = {
    name: "",
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
      this.setState({
        name: res.data.name,
      })
    );
  }

  render() {
    console.log("");
    return (
      <div>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

PokemonDetail.propTypes = {
  name: PropTypes.string,
};

export default withRouter(PokemonDetail);
