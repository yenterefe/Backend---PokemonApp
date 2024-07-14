/*
Card 2 people - Michael/ Al
Pokemon Name
Pokemon Type
Pokemon image
Pokemon info
abilities

*/
import Title from "./Title";
import Image from "./Image";
import Info from "./Info";

import { SearchBar } from "../Searchbar/Searchbar";

export default function Card(props) {
  console.log(props.pokemon.name);
  console.log(props.pokemon.stats[0].base_stat);
  console.log(props.pokemon.abilities[0].ability.name);
  props.pokemon.abilities.map((ability) => console.log(ability));
  return (
    <>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <Title
          name={props.pokemon.name}
          hp={props.pokemon.stats[0].base_stat}
        />
        <figure>
          <Image img={props.pokemon.sprites.front_default} />
        </figure>
        <div className="card-body">
          <p>Abilities:</p>
          <ul>
            {props.pokemon.abilities.map((ability, index) => (
              <Info key={index} name={ability.ability.name} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
