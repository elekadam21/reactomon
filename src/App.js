import React, { Component } from "react";
import Navbar from "./components/Navbar";

import "./App.css";

class App extends Component {
  state = {
    pokemons: [
      {
        id: 1,
        title: "Pikachu",
      },
      {
        id: 2,
        title: "Bulbasaur",
      },
      {
        id: 1,
        title: "Squirtle",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
