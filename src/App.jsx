import { useState } from "react";
import Card from "./components/Card/Card";
import Title from "./Title";
import { SearchBar } from "./components/Searchbar/Searchbar";
import Button from "./Button";
import "./App.css";
import img1 from "./assets/img1.png";
function App() {
  const [pokemon, setPokemon] = useState();

  return (
    <>
      <div className="poke-card">
        <Title />

        <SearchBar setPokemon={setPokemon} />

        {pokemon && <Card pokemon={pokemon} />}
      </div>
      <img src={img1} alt="pokemon" className="w-full object-cover " />
    </>
  );
}

export default App;
