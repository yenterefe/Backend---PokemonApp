import { useState } from "react";
import Card from "./components/Card/Card";
import Title from "./Title";
import { SearchBar } from "./components/Searchbar/Searchbar";
//import Button from "./Button";
import "./App.css";
import img4 from "./assets/img4.jpg";
import Footer from "./PageFooter";


function App() {
  const [pokemon, setPokemon] = useState();

  return (
    <>
      <div className="poke-card">
        <Title />

        <SearchBar setPokemon={setPokemon} />

        {pokemon && <Card pokemon={pokemon} />}
      </div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <img
        src={img4}
        alt="pokemon"
        className="w-3/5 object-contain m-auto  mt-20 mb-32 rounded-full "
      />
      <Footer />
    </>
  );
}

export default App;
