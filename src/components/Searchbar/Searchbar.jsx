import React from 'react';

import { useState } from 'react';
import axios from 'axios';



export const SearchBar = (props) => {
    const [input, setInput] = useState();
    async function getPokemon() {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);


            console.log(response.data);
            props.setPokemon(response.data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <>
            <div className="input-wrapper">
                <input type="text" value={input} placeholder="Find your Pokemon!" onChange={(e) => setInput(e.target.value.toLowerCase())} />
            </div>
            <br />
            <button onClick={getPokemon} className="btn btn-primary">
                Pokemon
            </button>
            {/* <img src={img} alt="pikachu img" /> */}
        </>

    );

}