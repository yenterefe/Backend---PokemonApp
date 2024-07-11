import { useState } from "react";
import Card from "./components/Card/Card";
import Title from "./Title";
import { SearchBar } from "./components/Searchbar/Searchbar";

function App() {
  return (
    <>
      <Title />
      <SearchBar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Card />
    </>
  );
}

export default App;
