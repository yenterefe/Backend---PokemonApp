import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";

export const SearchBar = (props) => {
  const [input, setInput] = useState();
  async function getPokemon() {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${input}`
      );

      console.log(response.data);
      props.setPokemon(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
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
      <div className=" p-7 outline rounded-md bg-yellow-400  mt-10 text-lg ">
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
