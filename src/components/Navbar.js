import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/pokemons">Pokemon List</Link>
        <Link to="/types">Type list</Link>
      </div>
    );
  }
}

export default Navbar;
