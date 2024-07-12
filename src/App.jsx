import { useState } from "react";
import Card from "./components/Card/Card";
import Title from "./Title";
import { SearchBar } from "./components/Searchbar/Searchbar";
import Button from "./Button";
import "./App.css"
function App() {
  const [pokemon, setPokemon] = useState()

  return (
    <>
      <div className="poke-card">
        <Title />
        <br />
        <SearchBar
          setPokemon={setPokemon}
        />
        <br />
        {pokemon && <Card pokemon={pokemon} />}
      </div>


    </>
  );
}

export default App;
