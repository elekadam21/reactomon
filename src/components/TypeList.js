import React, { Component } from "react";
import axios from "axios";

class TypeList extends Component {
  state = {
    types: [],
  };

  componentDidMount() {
    axios.get("https://pokeapi.co/api/v2/type").then((res) =>
      this.setState({
        types: res.data.results,
      })
    );
  }

  render() {
    return this.state.types.map((type) => (
      <p key={type.url}>{type.name + " " + type.url}</p>
    ));
  }
}

export default TypeList;
