import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import PokemonDetail from "./components/PokemonDetail";
import Header from "./components/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="App">
            <Header />
            <Navbar />
            <Route path="/pokemons" render={(props) => <PokemonList />} />
            <Route path="/types" render={(props) => <TypeList />} />
            <Route path="/pokemon/:id" children={<PokemonDetail />} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
