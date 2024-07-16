import React from "react";

import { useState } from "react";
import axios from "axios";
import ErrorWarning from "../ErrorWarning";

export const SearchBar = (props) => {
  const [input, setInput] = useState();
  const [isError, setIsError] = useState(false)
  const [isMissing, setIsMissing] = useState(false)
  const [errorContent, setErrorContent] = useState("")
  async function getPokemon() {
    try {

      if (!input) { // input is ""
        setIsError(true)
        setErrorContent("Please enter a Pokemon")
        setIsMissing(true)
        return;
      }

      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${input}`
      );

      console.log(response.data);
      props.setPokemon(response.data);

      setIsError(false)
    } catch (error) {
      console.error("Error fetching data:", error);

      // show the error warning


      setIsError(true)
      setErrorContent("Error: Unknown Pokemon")
      setIsMissing(false)
      console.log(input)



    }
  }

  return (
    <>
      {isError && <ErrorWarning isMissing={isMissing} content={errorContent} />}
      <div className=" py-7 px-7 rounded-md bg-yellow-400 mt-4 ">
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
