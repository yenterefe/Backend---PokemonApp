import React from 'react';

import { useState } from 'react';
import axios from 'axios';



export const SearchBar = () => {
    const [input, setInput] = useState();

    async function getPokemon() {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
            alert(JSON.stringify(response.data));

            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <>
            <div className="input-wrapper">
                <input type="text" value={input} placeholder="Find your Pokemon!" onChange={(e) => setInput(e.target.value)} />
            </div>
            <button onClick={getPokemon} class="btn btn-primary">
                Pokemon
            </button>
        </>

    );

}