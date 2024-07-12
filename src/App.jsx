import { useState } from "react";
import Card from "./components/Card/Card";
import Title from "./Title";
import { SearchBar } from "./components/Searchbar/Searchbar";
import Button from "./Button";
function App() {
  const [pokemon, setPokemon] = useState()

  return (
    <>
      <Title />
      <SearchBar
        setPokemon={setPokemon}
      />

      {pokemon && <Card pokemon={pokemon} />}

    </>
  );
}

export default App;
