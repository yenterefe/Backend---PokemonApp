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


export default function Card(props) {

  console.log(props.pokemon.types[0].type.name);
  props.pokemon.types.map(type => console.log(type.type.name))

  return (
    <>
      <div className="card card-compact bg-base-100 w-96 xl:w-5/12 shadow-xl">

        <Title
          name={props.pokemon.name}
          hp={props.pokemon.stats[0].base_stat}
          types={props.pokemon.types.map(type => type.type.name)}
        />
        <figure>
          <Image img={props.pokemon.sprites.front_default} />
        </figure>
        <div className="card-body ">
          <p className="text-xl">Abilities:</p>
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
