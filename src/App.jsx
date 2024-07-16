import { useState } from "react";
import Card from "./components/Card/Card";
import Title from "./Title";
import { SearchBar } from "./components/Searchbar/Searchbar";
//import Button from "./Button";
import "./App.css";
import img4 from "./assets/img4.jpg";
import Footer from "./PageFooter";

import img9 from "./assets/img9.gif";

function App() {
  const [pokemon, setPokemon] = useState();

  return (
    <>
      <div className="  px-8 py-8  mt-10  mb-15 bg-gradient-to-r from-blue-600 to-blue-300 hover:from-yellow-200 to hover: bg-yellow-300 poke-card rounded-2xl outline">
        <img
          src={img9}
          alt="pokemon"
          className="w-3/4 object-contain m-auto rounded-md mt-20  mb-32 outline "
        />

        <Title />

        <SearchBar setPokemon={setPokemon} />

        {pokemon && <Card pokemon={pokemon} />}
      </div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500"></div>

      <Footer />
    </>
  );
}

export default App;
