import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";
import ErrorWarning from "../ErrorWarning";

export const SearchBar = (props) => {
  const [input, setInput] = useState();
  const [isError, setIsError] = useState(false);
  const [isMissing, setIsMissing] = useState(false);
  const [errorContent, setErrorContent] = useState("");
  async function getPokemon() {
    try {
      if (!input) {
        // input is ""
        setIsError(true);
        setErrorContent("Please enter a Pokemon");
        setIsMissing(true);
        return;
      }

      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${input}`
      );

      console.log(response.data);
      props.setPokemon(response.data);

      setIsError(false);
    } catch (error) {
      console.error("Error fetching data:", error);

      // show the error warning

      setIsError(true);
      setErrorContent("Error: Unknown Pokemon");
      setIsMissing(false);
      console.log(input);
    }
  }

  const playSound = () => {
    const audio = new Audio("/sound1.wav");
    audio.play();
  };

  const handleClick = () => {
    getPokemon();
    playSound();
  };

  return (
    <>
      {isError && <ErrorWarning isMissing={isMissing} content={errorContent} />}
      <div className=" p-7 outline rounded-md bg-yellow-400 mt-4 text-lg ">
        <input
          type="text"
          value={input}
          placeholder="Find your Pokemon!"
          className="rounded-md outline shadow-md "
          onChange={(e) => setInput(e.target.value.toLowerCase())}
        />
      </div>
      <br />
      <button
        onClick={handleClick}
        // onClick={getPokemon}
        className="btn  text-black text-xl bg-gradient-to-r from-green-200 to-green-600 hover:from-red-700 to hover:bg-red-400 outline shadow-md"
      >
        Pokemon
      </button>
      <br></br>
      {/* <img src={img} alt="pikachu img" /> */}
    </>
  );
};
