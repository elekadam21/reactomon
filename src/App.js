import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";
import Header from "./components/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Navbar />
          <Route
            path="/pokemons"
            render={(props) => (
              <React.Fragment>
                <PokemonList />
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
