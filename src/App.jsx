import { useState } from "react";
import Card from "./components/Card/Card";
import Title from "./Title";
import { SearchBar } from "./components/Searchbar/Searchbar";
import Button from "./Button";
function App() {
  return (
    <>
      <Title />
      <SearchBar />
      <Button />
      <Card />
    </>
  );
}

export default App;
