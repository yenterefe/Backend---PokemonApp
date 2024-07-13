import React from "react";

import { useState } from "react";
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

  return (
    <>
      <div className=" py-7 px-7 rounded-md bg-yellow-400  mt-10 ">
        <input
          type="text"
          value={input}
          placeholder="Find your Pokemon!"
          className="rounded-md "
          onChange={(e) => setInput(e.target.value.toLowerCase())}
        />
      </div>
      <br />
      <button
        onClick={getPokemon}
        className="btn btn-primary text-black  text-sm bg-gradient-to-r from-red-100 hover:to-red-700"
      >
        Pokemon
      </button>
      {/* <img src={img} alt="pikachu img" /> */}
    </>
  );
};
